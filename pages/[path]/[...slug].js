import	React							from	'react';
import	{useRouter}						from	'next/router';
import	ErrorPage						from	'next/error';
import	{getPostBySlug, getSlugs, getRelatedPosts, listAllPosts} 	from	'utils/content';
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
	if (
		(params.path === 'financials' && (params.slug.length === 1 && params.slug[0] === 'quarterly-report')) ||
		(params.path === 'articles' && (params.slug.length === 1 && params.slug[0] === 'andre-cronje')) ||
		(params.path === 'articles' && (params.slug.length === 1 && params.slug[0] === 'forum')) ||
		(params.path === 'articles' && (params.slug.length === 1 && params.slug[0] === 'wot-is-goin-on')) ||
		(params.path === 'articles' && (params.slug.length === 1 && params.slug[0] === 'yearn-finance'))
	) {
		const	_allPosts = listAllPosts(`_${params.path}`, params.slug, locale);
		const	col1 = [];
		const	col2 = [];
		const	col3 = [];
		for (let index = 0; index < _allPosts.length; index += 3) {
			let		rIndex = index;
			if (_allPosts[rIndex])
				col1.push(_allPosts[rIndex]);
			if (_allPosts[rIndex + 1])
				col2.push(_allPosts[rIndex + 1]);
			if (_allPosts[rIndex + 2])
				col3.push(_allPosts[rIndex + 2]);
		}
		return {
			props: {
				allPosts: [...col1, ...col2, ...col3],
				isListing: true,
				path: `${params.path}`
			},
		};
	}

	const slug = params.slug[params.slug.length - 1];
	const path = `_${params.path}/${params.slug.slice(0, -1).join('/')}`;
	const post = getPostBySlug(
		path,
		slug,
		['title', 'image', 'date', 'slug', 'author', 'content', 'translator'],
		locale,
		true
	);
	const [newer, older] = await getRelatedPosts(
		path,
		['slug', 'date', 'title'],
		locale,
		false,
		slug
	);

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
	const parentPaths = [
		'announcements',
		'newsletters',
		'podcasts',
		'tweets',
		'financials',
		'articles',
	];
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

	Object.values(LOCALES).map(({code}) => {
		paths.push({params: {path: 'financials', slug: ['quarterly-report']}, locale: code});
		paths.push({params: {path: 'articles', slug: ['forum']}, locale: code});
		paths.push({params: {path: 'articles', slug: ['andre-cronje']}, locale: code});
		paths.push({params: {path: 'articles', slug: ['wot-is-goin-on']}, locale: code});
		paths.push({params: {path: 'articles', slug: ['yearn-finance']}, locale: code});
	});

	return {
		paths,
		fallback: false,
	};
}