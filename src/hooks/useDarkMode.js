import { useLocalStorage } from './useLocalStorage.js';

// const [isDarkEnabled, setIsDarkEnabled] = useLocalStorage('isDarkEnabled', false);

export const useDarkMode = () => {
	const [isDarkEnabled, setIsDarkEnabled] = useLocalStorage('isDarkEnabled', false);
	return [isDarkEnabled, setIsDarkEnabled];
};
