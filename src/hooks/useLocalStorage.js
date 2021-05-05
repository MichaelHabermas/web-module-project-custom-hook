import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
	// To retrieve an item from localStorage, call localStorage.getItem('itemName')
	// If that item doesn't exist, it will return undefined
	const [storedValue, setStoredValue] = useLocalStorageCreator(key, initialValue);
	const setValue = createValueSetter(setStoredValue, key);
	return [storedValue, setValue];
};

function useLocalStorageCreator(key, initialValue) {
	return useState(() => {
		const item = window.localStorage.getItem(key); // Get from local storage by key
		return item ? JSON.parse(item) : initialValue; // Parse and return stored json or, if undefined, return initialValue
	});
}
// const [storedValue, setStoredValue] = useState(() => {
// 	const item = window.localStorage.getItem(key); // Get from local storage by key
// 	return item ? JSON.parse(item) : initialValue; // Parse and return stored json or, if undefined, return initialValue
// });

function createValueSetter(setStoredValue, key) {
	return value => {
		setStoredValue(value); // Save state
		window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage
	};
}
// const setValue = value => {
// 	setStoredValue(value); // Save state
// 	window.localStorage.setItem(key, JSON.stringify(value)); // Save to local storage
// };
