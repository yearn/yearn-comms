module.exports = () => ({
	redirects() {
		return [
			{
				source: '/:path*',
				destination: 'https://medium.com/iearn',
				permanent: true
			}
		];
	}
});
