import	urlMetadata				from	'url-metadata';

export default async function handler(req, res) {
	let		{url} = req.query;
	const	metadata = await urlMetadata(url);
	return res.status(200).json(metadata);
}