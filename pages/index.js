import	React					from	'react';
import	{listAllPosts}			from	'utils/content';
import	TemplateList			from	'components/TemplateList';

function	Index({path, allPosts}) {
	return (
		<TemplateList path={path} allPosts={allPosts} />
	);
}

export default Index;

export const getStaticProps = async ({locale}) => {
	const _allPosts = listAllPosts(
		'_announcements',
		[''],
		locale
	);
	const	col1 = [];
	const	col2 = [];
	const	col3 = [];
	for (let index = 0; index < _allPosts.length; index += 3) {
		let		rIndex = index;
		if (_allPosts[rIndex]) {
			col1.push(_allPosts[rIndex]);
		}
		if (_allPosts[rIndex + 1]) {
			col2.push(_allPosts[rIndex + 1]);
		}
		if (_allPosts[rIndex + 2]) {
			col3.push(_allPosts[rIndex + 2]);
		}
	}
	return {
		props: {
			allPosts: [...col1, ...col2, ...col3],
			path: 'announcements'
		},
	};
};
