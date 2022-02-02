import	React					from	'react';
import	{listAllPosts}			from	'utils/content';
import	TemplateList			from	'components/TemplateList';
import	LOCALES					from	'utils/locale';

function	Index({path, allPosts}) {
	return (
		<TemplateList path={path} allPosts={allPosts} />
	);
}

export default Index;

export const getStaticProps = async ({locale, params}) => {
	const	childrens = {
		'announcements': [''],
		'newsletters': [''],
		'podcasts': [''],
		'tweets': [''],
		'financials': ['', 'quarterly-report'],
		'articles': ['', 'andre-cronje', 'forum', 'wot-is-goin-on', 'yearn-finance'],
	};
	const _allPosts = listAllPosts(
		`_${params.path}`,
		childrens[params.path] || [''],
		locale
	);
	const	col1 = [];
	const	col2 = [];
	const	col3 = [];
	let		currentCol = 1;
	// console.log(_allPosts);
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
			allPosts: [...col1, ...col2, ...col3],
			path: params.path
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
	});
	return {
		paths: allPaths,
		fallback: false,
	};
}