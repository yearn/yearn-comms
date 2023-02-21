import	React						from	'react';
import	TemplateList				from	'components/TemplateList';
import	staticData					from	'utils/home.props.json';

function	Index() {
	const	{allPosts, featured} = staticData;
	return (
		<TemplateList allPosts={allPosts} featured={featured} />
	);
}

export default Index;


//THIS CODE IS DISABLED
// export async function getStaticProps({locale}) {
// 	const	childrens = [
// 		['announcements/', ['']],
// 		['newsletters/', ['']],
// 		['podcasts/', ['']],
// 		['tweets/', ['']],
// 		['financials/', ['', 'quarterly-report/']],
// 		['updates/', ['', 'web-team/']],
// 		['articles/', ['', 'andre-cronje/', 'forum/', 'wot-is-goin-on/', 'yearn-finance/', 'marco-worms/', 'people-of-yearn/', 'kish/', 'farrahmay/', 'banteg/','draper/', 'transcriptions/']],
// 	];
// 	const	dirs = [];
// 	for (let index = 0; index < childrens.length; index++) {
// 		for (let jindex = 0; jindex < childrens[index][1].length; jindex++) {
// 			dirs.push(`_${childrens[index][0]}${childrens[index][1][jindex]}`);
// 		}
// 	}
// 	const	_allPosts = listAllPosts(dirs, locale);
// 	const	col1 = [];
// 	const	col2 = [];
// 	const	col3 = [];
// 	let		currentCol = 1;
// 	for (let index = 0; index < _allPosts.length; index++) {
// 		if (currentCol === 1) {
// 			col1.push(_allPosts[index]);
// 			currentCol = 2;
// 		} else if (currentCol === 2) {
// 			col2.push(_allPosts[index]);
// 			currentCol = 3;
// 		} else if (currentCol === 3) {
// 			col3.push(_allPosts[index]);
// 			currentCol = 1;
// 		}
// 	}

// 	while (col1.length > col2.length) {
// 		col2.push({});
// 	}
// 	while (col1.length > col3.length) {
// 		col3.push({});
// 	}
// 	return {
// 		props: {
// 			featured: getFeatured(locale),
// 			allPosts: {
// 				all: _allPosts,
// 				col1,
// 				col2,
// 				col3,
// 			},
// 		},
// 	};
// }
