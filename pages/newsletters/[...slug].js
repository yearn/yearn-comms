import	React							from	'react';
import	{useRouter}						from	'next/router';
import	ErrorPage						from	'next/error';
import	{getPostBySlug, getSlugs, getRelatedPosts} 	from	'utils/content';
import	LOCALES							from	'utils/locale';
import	TemplateList					from	'components/TemplateList';
import	TemplateArticle					from	'components/TemplateArticle';

function Post({path, post, newer, older, allPosts, isListing}) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug && isListing) {
		return <TemplateList path={path} allPosts={allPosts} />;
	} else if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	} else if (!post?.slug && !isListing) {
		return null;
	}
	return (<TemplateArticle routerPath={router.asPath} path={path} post={post} newer={newer} older={older} />);
}

export default Post;

export async function getStaticProps({params, locale}) {
	const slug = params.slug[params.slug.length - 1];
	const path = `_${params.path}/${params.slug.slice(0, -1).join('/')}`;
	const post = getPostBySlug(path, slug, ['content'], locale, true);
	const [newer, older] = await getRelatedPosts(path, [], locale, false, slug);

	return {
		props: {
			post,
			path: params.slug.length > 1 ? `${params.path}/${params.slug[0]}` : params.path,
			newer: newer || null,
			older: older || null
		},
	};
}

export async function getStaticPaths() {
	const parentPaths = ['newsletters'];
	const paths = [];

	for (let index = 0; index < parentPaths.length; index++) {
		const element = parentPaths[index];
		Object.values(LOCALES).map(({code}) => {
			const slugs = getSlugs(`_${element}`, code, false);
			const uniqueSlugs = [...new Set(slugs)];
			for (let index = 0; index < uniqueSlugs.length; index++) {
				const slug = uniqueSlugs[index];
				const slugAsArr = slug.split('/');
				const slugAsArrNoLast = slugAsArr.slice(0, -1);

				paths.push({
					params: {
						path: element,
						slug: slugAsArrNoLast,
					},
					locale: code
				});
			}
		});	
	}

	return {
		paths,
		fallback: true,
	};
}