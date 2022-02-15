const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	corePlugins: {
		ringColor: false,
	},
	darkMode: 'class',
	content: [
		'./pages/**/*.js',
		'./components/**/*.js'
	],
	theme: {
		colors: {
			'dark-blue-1': '#001746',
			'dark-blue-2': '#183672',
			'dark-blue-3': '#012A7C',
			'gray-blue-1': '#475570',
			'gray-blue-2': '#7F8DA9',
			'gray-blue-3': '#CED5E3',
			'yearn-blue': '#0657F9',
			'yearn-blue-light-1': '#C6D7F9',
			'yearn-blue-light-2': '#E0EAFF',
			'yearn-blue-dark': '#004ADF',
			'white': '#FFFFFF',
			'white-blue-1': '#F4F7FB',
			'white-blue-2': '#F9FBFD',
			'black': '#000000',
			'black-1': '#141414',
			'gray-1': '#191919',
			'gray-2': '#272727',
			'gray-3': '#A8A8A8',

		},
		extend: {
			fontFamily: {
				title: ['Roboto Slab', 'Roboto', 'serif'],
				roboto: ['Roboto', ...defaultTheme.fontFamily.sans]
			},
			boxShadow: {
				'sm': '0px 0px 8px rgba(0, 23, 70, 0.16)',
			},
			gridColumn: {
				'span-13': 'span 13 / span 13',
				'span-14': 'span 14 / span 14',
				'span-15': 'span 15 / span 15',
			},
			gridTemplateColumns: {
				'15': 'repeat(15, minmax(0, 1fr))',
			},
			width: {
				30: '7.5rem',
				33: '8.25rem',
				38: '9.5rem',
				42: '10.5rem',
				50: '12.5rem',
				55: '13.75rem',
			},
			height: {
				30: '7.5rem',
			},
			maxWidth: {
				'xl': '552px',
				'4xl': '904px',
				'6xl': '1200px',
			},
			fontSize: {
				'sm': ['12px', '16px'],
				'base': ['16px', '24px'],
				'lg': ['20px', '32px'],
				'xl': ['24px', '32px'],
				'4xl': ['40px', '56px'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms')
	],
};