import	React					from	'react';
import	Link					from	'next/link';
import	Image					from	'next/image';
import	{useRouter}				from	'next/router';
import	{AnimatePresence, motion}				from	'framer-motion';
import	{parseMarkdownUnset}	from	'utils';
import	useLocalization			from	'contexts/useLocalization';

const transition = {duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]};
const thumbnailVariants = {
	initial: {y: 20, opacity: 0, transition},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -20, opacity: 0, transition},
};

function	Column({allPosts, language}) {
	return (
		<div>
			{(allPosts || []).map((post, index) => {
				if (!post || !post?.slug) {
					return (
						<div className={'mb-6 break-inside'} key={`${index}${language}`}>
							<div className={'overflow-hidden w-full bg-white dark:bg-black rounded-lg cursor-pointer'}>
							</div>
						</div>
					);
				}
				return (
					<div className={'pb-6 break-inside'} key={`${post.path}${post.slug}${index}${language}`}>
						<Link prefetch={false} href={`/${post.path}${post.slug}`}>
							<div className={'w-full bg-white dark:bg-black rounded-lg shadow-none hover:shadow-sm transition-shadow cursor-pointer'}>
								<div className={'flex w-full border-b border-gray-blue-3 dark:border-gray-2'}>
									<Image
										src={(post?.image?.src || '').replace('//', '/') || '/default.jpeg'}
										quality={90}
										objectFit={'cover'}
										loading={'eager'}
										className={'rounded-t-lg reduce-brightness'}
										width={post?.image?.width || 800}
										height={post?.image?.height || 445} />
								</div>
								<div className={'p-4'}>
									<div className={'flex flex-row justify-between mb-2 w-full'}>
										<p className={'text-xs text-gray-blue-1 dark:text-gray-3'}>{`by ${post?.author || 'Yearn'}`}</p>
										<p className={'text-xs text-gray-blue-1 dark:text-gray-3'}>
											{`${new Date(post?.date || '').toLocaleDateString(language, {weekday:'long', year:'numeric', month:'short', day:'numeric'})}`}
										</p>
									</div>
									<h2
										className={'font-title text-lg font-bold text-dark-blue-1 dark:text-white'}
										dangerouslySetInnerHTML={{__html: parseMarkdownUnset(post?.title || '')}} />
								</div>
							</div>
						</Link>
					</div>
				);
			})}
		</div>
	);
}

function	Template({allPosts, featured}) {
	const	{language} = useLocalization();
	const	router = useRouter();

	function handleExitComplete() {
		if (typeof window !== 'undefined') {
			window.scrollTo({top: 0});
		}
	}


	return (
		<>
			<motion.div id={'featured-one'} key={'featured-one'} className={'mb-4'} initial={false} animate={'enter'} exit={'exit'} variants={thumbnailVariants}>
				<Link prefetch={false} href={`/${featured?.path}`}>
					<div className={'w-full bg-white dark:bg-black rounded-lg shadow-none hover:shadow-sm transition-shadow cursor-pointer'}>
						<div className={'aspect-[2/1] grid grid-cols-1 w-full bg-gray-blue-2 rounded-t-lg border-b border-gray-blue-3 dark:border-gray-2'}>
							<Image
								src={featured?.image?.src || '/default.jpeg'}
								quality={95}
								objectFit={'cover'}
								loading={'eager'}
								className={'rounded-t-lg reduce-brightness'}
								width={800}
								height={450} />
						</div>
						<div className={'p-4'}>
							<div className={'flex flex-row justify-between mb-2 w-full'}>
								<p className={'text-xs text-gray-blue-1 dark:text-gray-3'}>{`by ${featured?.author || 'Yearn'}`}</p>
								<p className={'text-xs text-gray-blue-1 dark:text-gray-3'}>
									{`${new Date(featured?.date || '').toLocaleDateString(language, {weekday:'long', year:'numeric', month:'short', day:'numeric'})}`}
								</p>
							</div>
							<h2
								className={'font-title text-lg font-bold text-dark-blue-1 dark:text-white'}
								dangerouslySetInnerHTML={{__html: parseMarkdownUnset(featured?.title || '')}} />
						</div>
					</div>
				</Link>
			</motion.div>
			<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
				<motion.section key={`list-${router.asPath}`} className={'pt-2 w-full'} initial={'initial'} animate={'enter'} exit={'exit'} variants={thumbnailVariants}>
					<div className={'hidden grid-cols-3 gap-6 md:grid'}>
						<Column allPosts={allPosts.col1} language={language} />
						<Column allPosts={allPosts.col2} language={language} />
						<Column allPosts={allPosts.col3} language={language} />
					</div>
					<div className={'grid grid-cols-1 gap-6 md:hidden'}>
						<Column allPosts={allPosts.all} language={language} />
					</div>
				</motion.section>
			</AnimatePresence>
		</>
	);
}

export default Template;