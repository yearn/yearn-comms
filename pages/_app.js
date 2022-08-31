import	React						from	'react';
import	{AnimatePresence, motion}	from	'framer-motion';
import	{UIContextApp}				from	'contexts/useUI';
import	{LocalizationContextApp}	from 	'contexts/useLocalization';
import	{MenuDesktop, MenuMobile}	from	'components/Menu';
import	Meta						from	'components/Meta';
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
			<Meta />
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
