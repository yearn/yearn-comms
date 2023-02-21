import	React						from	'react';
import	Link						from	'next/link';
import	IconTwitter					from	'components/icons/IconTwitter';
import	IconGithub					from	'components/icons/IconGithub';
import	IconDiscord					from	'components/icons/IconDiscord';
import	IconYearn					from	'components/icons/IconYearn';
import	useLocalization			from	'contexts/useLocalization';

function	Footer() {
	const	{common} = useLocalization();
	return (
		<footer className={'hidden flex-row items-center py-8 px-6 mx-auto w-full max-w-6xl bg-white-blue-1 dark:bg-black-1 md:flex'}>
			<Link href={'/disclaimer'}>
				<p className={'pr-6 text-gray-blue-1 dark:text-gray-3 link'}>
					{common['footer-disclaimer']}
				</p>
			</Link>
			<a href={'https://contribute.yearn.rocks'} target={'_blank'} className={'pr-6 text-gray-blue-1 dark:text-gray-3 link'} rel={'noreferrer'}>
				{common['footer-contribute']}
			</a>
			<a href={'https://yearnfinance.notion.site'} target={'_blank'} className={'pr-6 text-gray-blue-1 dark:text-gray-3 link'} rel={'noreferrer'}>
				{common['footer-join']}
			</a>
			<a href={'https://github.com/yearn/yearn-security/blob/master/SECURITY.md'} target={'_blank'} className={'pr-6 text-gray-blue-1 dark:text-gray-3 link'} rel={'noreferrer'}>
				{common['footer-vault-at-yearn']}
			</a>

			<div className={'px-3 ml-auto text-gray-blue-1 dark:text-gray-3 link'}>
				<a href={'https://twitter.com/iearnfinance'} target={'_blank'} rel={'noreferrer'}><IconTwitter /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 dark:text-gray-3 link'}>
				<a href={process.env.PROJECT_GITHUB_URL} target={'_blank'} rel={'noreferrer'}><IconGithub /></a>
			</div>
			<div className={'px-3 text-gray-blue-1 dark:text-gray-3 link'}>
				<a href={'https://discord.yearn.finance/'} target={'_blank'} rel={'noreferrer'}><IconDiscord /></a>
			</div>
			<div className={'pl-3 text-gray-blue-1 dark:text-gray-3 link'}>
				<a href={'https://yearn.finance'} target={'_blank'} rel={'noreferrer'}><IconYearn /></a>
			</div>
		</footer>
	);
}

export default Footer;
