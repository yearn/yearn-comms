import	React						from	'react';
import	Head						from	'next/head';
import	Script						from	'next/script';
import	{DefaultSeo}				from	'next-seo';
import	{AnimatePresence, motion}	from	'framer-motion';
import	{UIContextApp}				from	'contexts/useUI';
import	{LocalizationContextApp}	from 	'contexts/useLocalization';
import	{MenuDesktop, MenuMobile}	from	'components/Menu';
import	Footer						from	'components/StandardFooter';

import	'tailwindcss/tailwind.css';
import	'style/Default.css';

const transition = {duration: 0.3, ease: [0.17, 0.67, 0.83, 0.67]};
const thumbnailVariants = {
	initial: {y: 20, opacity: 0, transition},
	enter: {y: 0, opacity: 1, transition},
	exit: {y: -20, opacity: 0, transition},
};

function	WithLayout({props}) {
	const	{Component, pageProps, router} = props;

	function handleExitComplete() {
		if (typeof window !== 'undefined') {
			window.scrollTo({top: 0});
		}
	}

	return (
		<>
			<MenuMobile />
			<div id={'app'} className={'flex relative flex-col mx-auto mb-0 w-full max-w-6xl'}>
				<div className={'grid grid-cols-15 gap-x-4'}>
					<div className={'hidden md:block md:col-span-3'}>
						<MenuDesktop />
					</div>
					<main className={'flex flex-col col-span-15 pt-20 min-h-full md:col-span-12 md:pt-12'}>
						<AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
							<motion.div
								key={router.pathname === '/[path]' || router.pathname === '/' ? '/[path]' : router.asPath}
								initial={'initial'}
								animate={'enter'}
								exit={'exit'}
								variants={thumbnailVariants}>
								<Component element={props.element} {...pageProps} />
							</motion.div>
						</AnimatePresence>
						<div className={'grid static bottom-0 grid-cols-12 mt-auto'}>
							<div className={'col-span-12'}>
								<Footer />
							</div>
						</div>
					</main>
				</div>
			</div>
		</>
	);
}

function	AppWrapper(props) {
	return (
		<>
			<Head>
				<title>{process.env.WEBSITE_NAME}</title>
				<meta httpEquiv={'X-UA-Compatible'} content={'IE=edge'} />
				<meta name={'viewport'} content={'width=device-width, initial-scale=1'} />
				<meta name={'description'} content={process.env.WEBSITE_NAME} />
				<meta name={'msapplication-TileColor'} content={'#62688F'} />
				<meta name={'theme-color'} content={'#ffffff'} />
				<meta charSet={'utf-8'} />


				<link rel={'apple-touch-icon'} sizes={'57x57'} href={'/favicons/apple-icon-57x57.png'} />
				<link rel={'apple-touch-icon'} sizes={'60x60'} href={'/favicons/apple-icon-60x60.png'} />
				<link rel={'apple-touch-icon'} sizes={'72x72'} href={'/favicons/apple-icon-72x72.png'} />
				<link rel={'apple-touch-icon'} sizes={'76x76'} href={'/favicons/apple-icon-76x76.png'} />
				<link rel={'apple-touch-icon'} sizes={'114x114'} href={'/favicons/apple-icon-114x114.png'} />
				<link rel={'apple-touch-icon'} sizes={'120x120'} href={'/favicons/apple-icon-120x120.png'} />
				<link rel={'apple-touch-icon'} sizes={'144x144'} href={'/favicons/apple-icon-144x144.png'} />
				<link rel={'apple-touch-icon'} sizes={'152x152'} href={'/favicons/apple-icon-152x152.png'} />
				<link rel={'apple-touch-icon'} sizes={'180x180'} href={'/favicons/apple-icon-180x180.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'192x192'}  href={'/favicons/android-icon-192x192.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'32x32'} href={'/favicons/favicon-32x32.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'96x96'} href={'/favicons/favicon-96x96.png'} />
				<link rel={'icon'} type={'image/png'} sizes={'16x16'} href={'/favicons/favicon-16x16.png'} />
				<link rel={'manifest'} href={'/favicons/manifest.json'} />
				<meta name={'msapplication-TileColor'} content={'#ffffff'} />
				<meta name={'msapplication-TileImage'} content={'/favicons/ms-icon-144x144.png'} />
				<meta name={'theme-color'} content={'#ffffff'} />

				<meta name={'robots'} content={'index,nofollow'} />
				<meta name={'googlebot'} content={'index,nofollow'} />
			</Head>
			<Script strategy={'afterInteractive'} data-domain={'blog.yearn.finance'} src={'https://analytics.yearn.finance/js/plausible.js'} />
			<DefaultSeo
				title={process.env.WEBSITE_NAME}
				defaultTitle={process.env.WEBSITE_NAME}
				description={process.env.WEBSITE_DESCRIPTION}
				openGraph={{
					type: 'website',
					locale: 'en_US',
					url: process.env.WEBSITE_URI,
					site_name: process.env.WEBSITE_NAME,
					title: process.env.WEBSITE_NAME,
					description: process.env.WEBSITE_DESCRIPTION,
					images: [
						{
							url: `${process.env.WEBSITE_URI}/og.png`,
							width: 1200,
							height: 675,
							alt: 'Yearn',
						}
					]
				}}
				twitter={{
					handle: '@iearnfinance',
					site: '@iearnfinance',
					cardType: 'summary_large_image',
				}} />
			<WithLayout props={props} />
		</>
	);
}


function	MyApp(props) {
	const	{Component, pageProps} = props;
	
	return (
		<UIContextApp>
			<LocalizationContextApp router={props.router}>
				<AppWrapper
					Component={Component}
					pageProps={pageProps}
					element={props.element}
					router={props.router} />
			</LocalizationContextApp>
		</UIContextApp>
	);
}

export default MyApp;
