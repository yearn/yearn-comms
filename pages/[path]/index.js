import	React					from	'react';
import	{listAllPosts}			from	'utils/content';
import	TemplateList			from	'components/TemplateList';
import	LOCALES					from	'utils/locale';

function	Index({allPosts}) {
	return (
		<TemplateList allPosts={allPosts} />
	);
}

export default Index;

export const getStaticProps = async ({locale, params}) => {
	const	childrens = [
		['announcements/', ['']],
		['newsletters/', ['']],
		['podcasts/', ['']],
		['tweets/', ['']],
		['financials/', ['', 'quarterly-report/']],
		['updates/', ['', 'web-team/']],
		['articles/', ['', 'andre-cronje/', 'forum/', 'wot-is-goin-on/', 'yearn-finance/', 'marco-worms/', 'kish/']],
	];
	const	dirs = [];
	for (let index = 0; index < childrens.length; index++) {
		if (childrens[index][0] === `${params.path}/`) {
			for (let jindex = 0; jindex < childrens[index][1].length; jindex++) {
				dirs.push(`_${childrens[index][0]}${childrens[index][1][jindex]}`);
			}
		}
	}
	const _allPosts = listAllPosts(dirs, locale);
	const	col1 = [];
	const	col2 = [];
	const	col3 = [];
	let		currentCol = 1;
	for (let index = 0; index < _allPosts.length; index++) {
		if (currentCol === 1) {
			col1.push(_allPosts[index]);
			currentCol = 2;
		} else if (currentCol === 2) {
			col2.push(_allPosts[index]);
			currentCol = 3;
		} else if (currentCol === 3) {
			col3.push(_allPosts[index]);
			currentCol = 1;
		}
	}
	if (col1.length > col2.length) {
		col2.push(null);
	}
	if (col1.length > col3.length) {
		col3.push(null);
	}
	return {
		props: {
			path: params.path,
			allPosts: {
				col1,
				col2,
				col3,
			},
		},
	};
};

export async function getStaticPaths() {
	const	allPaths = [];
	Object.values(LOCALES).map(({code}) => {
		allPaths.push({params: {path: 'announcements'}, locale: code});
		allPaths.push({params: {path: 'newsletters'}, locale: code});
		allPaths.push({params: {path: 'podcasts'}, locale: code});
		allPaths.push({params: {path: 'financials'}, locale: code});
		allPaths.push({params: {path: 'articles'}, locale: code});
		allPaths.push({params: {path: 'tweets'}, locale: code});
		allPaths.push({params: {path: 'updates'}, locale: code});
	});
	return {
		paths: allPaths,
		fallback: false,
	};
}