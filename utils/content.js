import fs from 'fs';
import {join} from 'path';
import matter from 'gray-matter';

export function getPostSlugs(dir) {
	const postsDirectory = join(process.cwd(), `public/_posts/${dir}`);
	const dirContent = fs.readdirSync(`${postsDirectory}`);
	const toRet = [];
	for (let index = 0; index < dirContent.length; index++) {
		toRet.push(dirContent[index]);
	}
	return (toRet);
}

export function getPostBySlug(dir, slug, fields = [], locale, withFallback) {
	const	postsDirectory = join(process.cwd(), `public/_posts/${dir}`);
	const	fullPath = join(`${postsDirectory}/${slug}/${locale}.md`);
	const	defaultFields = ['published', 'slug', 'date', 'title', 'image', 'author', 'translator'];
	fields = [...fields, ...defaultFields];

	if (!fs.existsSync(fullPath)) {
		if (withFallback) {
			const	fullPathEN = join(`${postsDirectory}/${slug}/en.md`);
			const	fileContents = fs.readFileSync(fullPathEN, 'utf8');
			const	{data, content} = matter(fileContents);
			const	items = {slug};
	
			// Ensure only the minimal needed data is exposed
			items['published'] = true;
			fields.forEach((field) => {
				if (field === 'content') {
					items[field] = content;
				}
	
				if (data[field] !== undefined) {
					if (field === 'image') {
						const {src, width, height} = data[field];
						if ((src || '').startsWith('./')) {
							items[field] = {
								src: src.replace('./', `/_posts/${dir}/${slug}/`),
								width,
								height
							};
						}
					} else {
						items[field] = data[field];
					}
				}
			});
			return items;
		}
		return null;
	} else {
		const	fileContents = fs.readFileSync(fullPath, 'utf8');
		const	{data, content} = matter(fileContents);
		const	items = {slug};

		// remove leading _ from dir
		items['path'] = `${dir.replace(/^_/, '')}`;
		items['published'] = true;
		fields.forEach((field) => {
			if (field === 'content') {
				items[field] = content;
			}

			if (data[field] !== undefined) {
				if (field === 'image') {
					const {src, width, height} = data[field];
					if ((src || '').startsWith('./')) {
						items[field] = {
							src: src.replace('./', `/_posts/${dir}${slug}/`),
							width,
							height
						};
					}
				} else {
					items[field] = data[field];
				}
			}
		});

		return items;
	}
}

export function getRelatedPosts(dir, fields = [], locale, withFallback = false, postSlug) {
	const slugs = getPostSlugs(dir);
	const posts = slugs
		.map((slug) => getPostBySlug(dir, slug, fields, locale, withFallback))
		.filter(Boolean)
		.sort((post1, post2) => (post1.date > post2?.date ? -1 : 1));
	

	for (let index = 0; index < posts.length; index++) {
		const {slug} = posts[index];
		if (slug === postSlug) {
			if (index > 0 && index < posts.length - 1) {
				return [posts[index - 1], posts[index + 1]];
			} else if (index === 0) {
				return [null, posts[index + 1]];
			} else if (index === posts.length - 1) {
				return [posts[index - 1], null];
			}
		}
	}
	return [];
}

export function getAllPosts(
	dir,
	paths = [''],
	fields = [],
	locale,
	withFallback = false
) {
	let	slugs = [];
	for (let index = 0; index < paths.length; index++) {
		slugs.push(...getPostSlugs(`${dir}/${paths[index]}`));
	}
	const posts = slugs
		.map((slug) => getPostBySlug(dir, slug, fields, locale, withFallback))
		.filter(Boolean)
		.sort((post1, post2) => (post1.date > post2?.date ? -1 : 1));
	return posts;
}

export function listAllPosts(dir, locale, withFallback = false) {
	let	posts = [];
	for (let index = 0; index < dir.length; index++) {
		const	slugs = [...getPostSlugs(dir[index])];
		posts.push(
			...slugs
				.map((slug) => getPostBySlug(dir[index], slug, [], locale, withFallback))
				.filter(Boolean)
				.filter(p => p.published)
		);
	}
	posts = posts .sort((post1, post2) => (post1.date > post2?.date ? -1 : 1));
	return posts;
}

export function _getSlugs(dir, locale, withFallback) {
	const postsDirectory = join(process.cwd(), `public/_posts/${dir}`);
	const dirContent = fs.readdirSync(postsDirectory);
	const slugs = [];
	for (let index = 0; index < dirContent.length; index++) {
		const subDir = dirContent[index];
		const fullPath = join(`${postsDirectory}/${subDir}/${locale}.md`);
		const fullPathEN = join(`${postsDirectory}/${subDir}/en.md`);
		if (fs.existsSync(fullPath)) {
			slugs.push(`${subDir}/${locale}.md`);
		} else if (fs.existsSync(fullPathEN)) {
			if (withFallback)
				slugs.push(`${subDir}/en.md`);
		} else {
			const subDirContent = fs.readdirSync(`${postsDirectory}/${subDir}`);
			for (let jindex = 0; jindex < subDirContent.length; jindex++) {
				const subsubDir = subDirContent[jindex];
				const fullPath = join(`${postsDirectory}/${subDir}/${subsubDir}/${locale}.md`);
				const fullPathEN = join(`${postsDirectory}/${subDir}/${subsubDir}/en.md`);
				if (fs.existsSync(fullPath)) {
					slugs.push(`${subDir}/${subsubDir}/${locale}.md`);
				} else if (fs.existsSync(fullPathEN)) {
					if (withFallback)
						slugs.push(`${subDir}/${subsubDir}/en.md`);
				}
			}
		}
	}
	return (slugs);
}

export function getSlugs(dir, locale, withFallback = false) {
	let	slugs = _getSlugs(dir, locale, withFallback);
	return slugs;
}