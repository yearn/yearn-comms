import	React				from	'react';
import	Image				from	'next/image';
import	{useRouter}			from	'next/router';
import	Link				from	'next/link';
import	useLocalization		from	'contexts/useLocalization';
import	useUI				from	'contexts/useUI';
import	IconHamburger		from	'components/icons/IconHamburger';
import	LOCALES				from	'utils/locale';

function	MenuItem({label, condition, href, className, height = 'h-6'}) {
	return (
		<Link href={href}>
			<div className={`${condition ? 'text-yearn-blue dark:text-white font-bold' : 'text-gray-blue-1 dark:text-gray-3'} cursor-pointer relative w-full ${className}`}>
				{label}
				<div className={'hidden absolute top-0 z-20 md:block'} style={{right: -3}}>
					<div className={`${height} bg-yearn-blue dark:bg-white rounded-sm ${condition ? 'opacity-100' : 'opacity-0'}`} style={{width: 5}} />
				</div>
			</div>
		</Link>
	);
}

function	MenuItems() {
	const	router = useRouter();
	const	{common} = useLocalization();
	return (
		<div className={'w-full'}>
			<MenuItem
				className={'mb-4'}
				label={common['menu-announcements']}
				condition={router.asPath.startsWith('/announcements')}
				href={'/announcements'} />
			<MenuItem
				className={'mb-4'}
				label={common['menu-newsletters']}
				condition={router.asPath.startsWith('/newsletters')}
				href={'/newsletters'} />
			<MenuItem
				className={'mb-4'}
				label={common['menu-articles']}
				condition={router.asPath.startsWith('/articles')}
				href={'/articles'} />
			<MenuItem
				className={'mb-4'}
				label={common['menu-financials']}
				condition={router.asPath.startsWith('/financials')}
				href={'/financials'} />
			<MenuItem
				className={'mb-4'}
				label={common['menu-tweets']}
				condition={router.asPath.startsWith('/tweets')}
				href={'/tweets'} />
			<MenuItem
				className={'mb-4'}
				label={common['menu-updates']}
				condition={router.asPath.startsWith('/updates')}
				href={'/updates'} />
			<MenuItem
				label={common['menu-podcasts']}
				condition={router.asPath.startsWith('/podcasts')}
				href={'/podcasts'} />
		</div>
	);
}

function	MenuMobile() {
	const	{common, language, set_language} = useLocalization();
	const	{theme, switchTheme} = useUI();
	const	router = useRouter();
	const	[isExpanded, set_isExpanded] = React.useState(false);
	const	[isExpandedAnimation, set_isExpandedAnimation] = React.useState(false);
	
	function	onExpand() {
		if (isExpanded) {
			set_isExpandedAnimation(false);
			setTimeout(() => set_isExpanded(false), 500);
		} else {
			set_isExpanded(true);
			setTimeout(() => set_isExpandedAnimation(true), 1);
		}
	}

	React.useEffect(() => {
		set_isExpandedAnimation(false);
		setTimeout(() => set_isExpanded(false), 500);
	}, [router.asPath]);

	return (
		<nav className={'block fixed top-0 z-50 p-4 w-full h-16 bg-white dark:bg-black-1 shadow md:hidden'}>
			<div className={'relative z-20 w-full h-full'}>
				<div className={'flex relative flex-col w-full h-full'}>
					<div className={'flex flex-row justify-between items-center'}>
						<Link href={'/'}>
							<span className={'flex flex-row items-start'}>
								<Image src={'/YFI.png'} width={32} height={32} quality={95} loading={'eager'} />
								<h1 className={'pl-4 text-lg font-bold text-dark-blue-1 dark:text-white'}>
									<span className={'text-yearn-blue'}>{'yearn'}</span>
									{` ${common['title-blog']}`}
								</h1>
							</span>
						</Link>
						<IconHamburger className={'block w-6 h-6 text-yearn-blue dark:text-white'} onClick={onExpand} />
					</div>
				</div>
			</div>
			<div className={`w-full inset-x-0 transition-max-height duration-500 overflow-hidden bg-white dark:bg-black-1 fixed top-14 ${isExpandedAnimation ? 'max-h-max shadow border-b border-b-gray-2' : 'max-h-0'}`}>
				{isExpanded ? (
					<div className={'relative p-4'}>
						<MenuItems />
						<div className={'flex flex-row items-center mt-8'}>
							<select
								value={language}
								className={'flex items-center py-2 px-3 pr-7 m-0 mr-1 text-xs font-semibold text-dark-blue-1 dark:text-white whitespace-nowrap bg-white dark:bg-black rounded-sm border-none cursor-pointer'}
								onChange={(e) => {
									router.push(router.asPath, router.asPath, {locale: e.target.value});
									set_language(e.target.value);
								}}>
								{Object.values(LOCALES).map((lang, index) => (
									<option className={'cursor-pointer'} key={index} value={lang.code}>{lang.name}</option>
								))}
							</select>
						</div>
						<div className={'absolute top-4 right-4'}>
							<svg
								onClick={switchTheme}
								className={`text-ygray-100 dark:text-white hover:opacity-100 transition-opacity cursor-pointer w-4 h-4 opacity-20 ${theme === 'dark' ? 'hidden' : ''}`} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}><path fill={'currentColor'} d={'M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z'}></path></svg>

							<svg
								onClick={switchTheme}
								className={`text-ygray-100 dark:text-white hover:opacity-100 transition-opacity cursor-pointer w-4 h-4 opacity-20 ${theme === 'dark' ? '' : 'hidden'}`} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}><path fill={'currentColor'} d={'M120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144z'}></path></svg>
						</div>
					</div>
				) : <div />}
			</div>
		</nav>
	);
}

function	MenuDesktop() {
	const	{common, language, set_language} = useLocalization();
	const	{theme, switchTheme} = useUI();
	const	router = useRouter();
	
	return (
		<nav className={'hidden sticky top-0 z-50 px-0 pt-12 w-full h-screen border-r border-gray-blue-3 dark:border-gray-2 shadow-none md:block'}>
			<div className={'relative z-20 w-full h-full'}>
				<div className={'flex relative flex-col w-full h-full'}>
					<div className={'flex flex-row justify-between items-center'}>
						<Link href={'/'}>
							<span className={'flex flex-row items-start cursor-pointer'}>
								<Image src={'/YFI.png'} width={32} height={32} quality={95} loading={'eager'} />
								<h1 className={'pl-4 text-lg font-bold text-dark-blue-1 dark:text-white'}>
									<span className={'text-yearn-blue'}>{'yearn'}</span>
									{` ${common['title-blog']}`}
								</h1>
							</span>
						</Link>
					</div>
					<div className={'pt-12'}>
						<MenuItems />
					</div>
					<div className={'flex flex-row justify-between items-center mt-auto mb-7'}>
						<div className={'flex flex-row items-center space-x-4'}>
							<select
								value={language}
								className={'flex items-center py-2 px-3 pr-7 m-0 mr-1 text-xs font-semibold whitespace-nowrap rounded-sm border-none cursor-pointer button-light'}
								onChange={(e) => {
									router.push(router.asPath, router.asPath, {locale: e.target.value});
									set_language(e.target.value);
								}}>
								{Object.values(LOCALES).map((lang, index) => (
									<option className={'cursor-pointer'} key={index} value={lang.code}>{lang.name}</option>
								))}
							</select>
						</div>
						<div className={'flex flex-row items-center mr-8 space-x-4'}>
							<svg
								onClick={switchTheme}
								className={`text-ygray-100 dark:text-white hover:opacity-100 transition-opacity cursor-pointer w-4 h-4 opacity-20 ${theme === 'dark' ? 'hidden' : ''}`} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}><path fill={'currentColor'} d={'M32 256c0-123.8 100.3-224 223.8-224c11.36 0 29.7 1.668 40.9 3.746c9.616 1.777 11.75 14.63 3.279 19.44C245 86.5 211.2 144.6 211.2 207.8c0 109.7 99.71 193 208.3 172.3c9.561-1.805 16.28 9.324 10.11 16.95C387.9 448.6 324.8 480 255.8 480C132.1 480 32 379.6 32 256z'}></path></svg>

							<svg
								onClick={switchTheme}
								className={`text-ygray-100 dark:text-white hover:opacity-100 transition-opacity cursor-pointer w-4 h-4 opacity-20 ${theme === 'dark' ? '' : 'hidden'}`} role={'img'} xmlns={'http://www.w3.org/2000/svg'} viewBox={'0 0 512 512'}><path fill={'currentColor'} d={'M120.2 154.2c4.672 4.688 10.83 7.031 16.97 7.031S149.5 158.9 154.2 154.2c9.375-9.375 9.375-24.56 0-33.93L108.9 74.97c-9.344-9.375-24.56-9.375-33.94 0s-9.375 24.56 0 33.94L120.2 154.2zM256 112c13.25 0 24-10.75 24-24v-64C280 10.75 269.3 0 256 0S232 10.75 232 24v64C232 101.3 242.8 112 256 112zM112 256c0-13.25-10.75-24-24-24h-64C10.75 232 0 242.8 0 256s10.75 24 24 24h64C101.3 280 112 269.3 112 256zM374.8 161.2c6.141 0 12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.94s-24.59-9.375-33.94 0l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.93C362.5 158.9 368.7 161.2 374.8 161.2zM256 400c-13.25 0-24 10.75-24 24v64C232 501.3 242.8 512 256 512s24-10.75 24-24v-64C280 410.8 269.3 400 256 400zM120.2 357.8l-45.25 45.28c-9.375 9.375-9.375 24.56 0 33.94c4.688 4.688 10.83 7.031 16.97 7.031s12.3-2.344 16.97-7.031l45.25-45.28c9.375-9.375 9.375-24.56 0-33.93S129.6 348.4 120.2 357.8zM488 232h-64c-13.25 0-24 10.75-24 24s10.75 24 24 24h64C501.3 280 512 269.3 512 256S501.3 232 488 232zM391.8 357.8c-9.344-9.375-24.56-9.372-33.94 .0031s-9.375 24.56 0 33.93l45.25 45.28c4.672 4.688 10.83 7.031 16.97 7.031s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L391.8 357.8zM256 144C194.1 144 144 194.1 144 256c0 61.86 50.14 112 112 112s112-50.14 112-112C368 194.1 317.9 144 256 144z'}></path></svg>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export {MenuDesktop, MenuMobile};
