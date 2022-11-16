/* eslint-disable no-unused-vars */
import	React					from	'react';
import	Link					from	'next/link';
import	{useRouter}				from	'next/router';
import	Image					from	'next/image';
import	Head					from	'next/head';
import	{NextSeo}				from	'next-seo';
import	ReactMarkdown			from	'react-markdown';
import	remarkGfm				from	'remark-gfm';
import	rehypeRaw				from	'rehype-raw';
import	useLocalization			from	'contexts/useLocalization';
import	IconChevron				from	'components/icons/IconChevron';
import	{parseMarkdown}			from	'utils';
import 	axios 					from 'axios';
import 	urlSlug 				from 'url-slug';

function	LinkPreview(props) {
	const	[metadata, set_metadata] = React.useState({});

	React.useEffect(() => {
		axios.get('/api/metadata', {
			params: {
				url: props.link
			}
		}).then(({data}) => set_metadata(data)).catch((error) => console.log(error));
	}, [props.link]);

	return (
		<a href={props.link} target={'_blank'} rel={'noreferrer'} className={'no-underline'}>
			<slot {...props}>
				<div className={'w-full'}>
					<h4>{metadata?.title}</h4>
					<p className={'text-gray-blue-1 dark:text-white'}>{metadata?.description}</p>
					<p className={'text-sm !text-gray-blue-2 dark:!text-white !no-underline'}>{props.link}</p>
				</div>
				<div>
					<img src={metadata.image || metadata['og:image'] || metadata['twitter:image']} />
				</div>
			</slot>
		</a>
	);
}

function	getHeaderSlug(props) {
	const content = props?.children?.[0];
	if (typeof content === 'string') {
		return urlSlug(content);
	}
	return;
}

function	Template({routerPath, path, post, newer, older}) {
	const	router = useRouter();
	const	{common, language} = useLocalization();

	return (
		<div className={'-mt-2 md:-mt-12'}>
			<Head>
				<title>{post?.title || ''}</title>
				{post?.image?.url ? <meta property={'og:image'} content={post.image.url} /> : null}
			</Head>
			<NextSeo
				title={post?.title || ''}
				openGraph={{
					url: `${process.env.WEBSITE_URI}${router.asPath}`,
					title: post?.title || '',
					images: [
						{
							url: post?.image?.src ? `${process.env.WEBSITE_URI}${post.image.src}` : `${process.env.WEBSITE_URI}/og.png`,
							width: post?.image?.width || 1200,
							height: post?.image?.height || 675,
							alt: post?.title || 'Yearn Blog'
						}
					],
					site_name: 'Yearn Blog',
				}}
			/>

			<div className={'flex flex-row justify-between pt-6 pb-4'}>
				{newer ? <Link href={`/${path}/${newer?.slug}`}>
					<div className={'flex flex-row items-center text-yearn-blue dark:text-white hover:underline cursor-pointer'}>
						<IconChevron className={'w-4 h-4'} />
						<p className={'ml-1 text-xs'}>{(newer?.title || '')?.replace(/~~/g, '')}</p>
					</div>
				</Link> : <div />}
				{older ? <Link href={`/${path}/${older?.slug}`}>
					<div className={'flex flex-row items-center text-yearn-blue dark:text-white hover:underline cursor-pointer'}>
						<p className={'mr-1 text-xs'}>{(older?.title || '')?.replace(/~~/g, '')}</p>
						<IconChevron className={'w-4 h-4 rotate-180'} />
					</div>
				</Link>: <div />}
			</div>

			<article className={'p-4 w-full bg-white dark:bg-black rounded-lg'}>
				<div className={'flex flex-col mb-6'}>
					<p className={'pb-6 text-xs text-gray-blue-1 dark:text-gray-3'}>
						{`${new Date(post?.date || '').toLocaleDateString(language, {weekday:'long', year:'numeric', month:'short', day:'numeric'})} | ${common['written-by']} ${post?.author || 'Yearn'}${post?.translator ? ` | ${common['translated-by']} ${post?.translator || 'Yearn'}` : ''}`}
					</p>
					<h1
						className={'font-title text-3xl font-bold text-dark-blue-1 dark:text-white whitespace-pre-line'}
						dangerouslySetInnerHTML={{__html: parseMarkdown(post?.title || '')}} />
				</div>
				<div className={'mb-8 space-y-6 w-full max-w-full text-gray-blue-1 dark:text-gray-3 prose'}>
					<ReactMarkdown
						rehypePlugins={[rehypeRaw]}
						remarkPlugins={[remarkGfm]}
						components={{
							a: ({...props}) => <a {...props} target={'_blank'} rel={'noopener noreferrer'} className={'text-yearn-blue dark:text-white hover:underline'} />,
							h1: ({node, ...props}) => <h1 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							h2: ({node, ...props}) => <h2 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							h3: ({node, ...props}) => <h3 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							h4: ({node, ...props}) => <h4 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							h5: ({node, ...props}) => <h5 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							h6: ({node, ...props}) => <h6 {...props} id={getHeaderSlug(props)} className={'text-dark-blue-1 dark:text-white'} />,
							b: ({...props}) => <b {...props} className={'text-dark-blue-1 dark:text-white'} />,
							iframe: ({...props}) => <iframe {...props} className={'aspect-video w-full h-full'} />,
							strong: ({...props}) => <strong {...props} className={'text-dark-blue-1 dark:text-white'} />,
							autoslot: ({...props}) => <LinkPreview href={props.link} {...props} />,
							p: ({...props}) => <div {...props} />,
							slot: ({...props}) => {
								return (
									<a href={props.link} target={'_blank'} rel={'noreferrer'} className={'no-underline'}>
										<slot {...props}>
											<div className={'w-full'}>
												{props.children}
												<p className={'text-sm !text-gray-blue-2 dark:!text-white !no-underline'}>{props.link}</p>
											</div>
											<div>
												<img src={props.image} />
											</div>
										</slot>
									</a>
								);
							},
							img: ({...props}) => {
								const	srcStartWithHttp = props.src.startsWith('http');
								const	srcStartWithHttps = props.src.startsWith('https');
								const	srcStartWithDotSlash = props.src.startsWith('./');
								const	srcStartWithSlash = props.src.startsWith('/');
								if (!srcStartWithHttp && !srcStartWithHttps && srcStartWithDotSlash) {
									props.src = `/_posts/_${routerPath.substring(1)}/${props.src.replace('./', '')}`;
								} else if (!srcStartWithHttp && !srcStartWithHttps && !srcStartWithSlash) {
									props.src = `/_posts/_${routerPath.substring(1)}/${props.src}`;
								}
								const width = props.src.match(/w=(\d+)/)?.[1] || 0;
								const height = props.src.match(/h=(\d+)/)?.[1] || 0;
								return (
									<div className={'flex flex-col justify-center mx-auto mb-6 space-y-2 w-full'}>
										<Image
											quality={95}
											width={width || 880}
											height={height || 600}
											objectFit={height + width === 0 ? 'contain' : 'contain'}
											className={'rounded-sm reduce-brightness'}
											{...props} />
										{props.alt ? <p className={'text-intermediate text-center'}>{props.alt}</p> : null}
									</div>
								);
							}
						}}>
						{post?.content || ''}
					</ReactMarkdown>
				</div>
			</article>
		</div>
	);
}

export default Template;