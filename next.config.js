const Dotenv = require('dotenv-webpack');

module.exports = ({
	i18n: {
		locales: ['en', 'fr', 'es', 'de', 'pt', 'el', 'tr', 'vi', 'zh', 'hi', 'ja', 'id', 'ru'],
		defaultLocale: 'en'
	},
	plugins: [new Dotenv()],
	images: {
		domains: [
			'rawcdn.githack.com'
		],
	},
	env: {
		WEBSITE_URI: 'https://blog.yearn.finance',
		WEBSITE_NAME: 'Yearn Comms',
		WEBSITE_TITLE: 'Yearn Comms',
		WEBSITE_DESCRIPTION: 'Yearn Comms',
		PROJECT_GITHUB_URL: 'https://github.com/yearn/yearn-comms',
		USE_PRICES: false,
		USE_PRICE_TRI_CRYPTO: false,
		CG_IDS: [],
		TOKENS: [],
		ALCHEMY_KEY: process.env.ALCHEMY_KEY
	}
});
