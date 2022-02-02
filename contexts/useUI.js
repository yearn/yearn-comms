import	React, {useEffect, useContext, createContext}	from	'react';
import	useLocalStorage									from	'hooks/useLocalStorage';

const	UI = createContext();
export const UIContextApp = ({children}) => {
	const	[theme, set_theme] = useLocalStorage('theme', 'light-initial');

	useEffect(() => {
		if (theme !== 'light-initial') {
			const lightModeMediaQuery = window.matchMedia('(prefers-color-scheme: light)');
			if (lightModeMediaQuery.matches)
				set_theme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'light') {
			document.documentElement.classList.add('light');
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.remove('dark-initial');
		} else if (theme === 'dark' || theme === 'dark-initial') {
			document.documentElement.classList.add('dark');
			document.documentElement.classList.remove('light');
		}
	}, [theme]);

	return (
		<UI.Provider
			value={{
				theme,
				switchTheme: () => set_theme(t => t === 'dark' ? 'light' : 'dark'),
			}}>
			{children}
		</UI.Provider>
	);
};

export const useUI = () => useContext(UI);
export default useUI;
