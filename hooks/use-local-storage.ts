import { useEffect, useState } from "react";

function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, (value: T | ((val: T) => T)) => void] {
    // Initialize the state with the value from localStorage or fallback to initialValue
    const [storedValue, setStoredValue] = useState<T>(initialValue);

    useEffect(() => {
        const item = window.localStorage.getItem(key);

        if (item) {
            try {
                const value = JSON.parse(item);
                setStoredValue(value);
            } catch (error) {
                console.error("Error parsing localStorage", error);
            }
        }
    }, [key]);

    // Function to set a new value in localStorage and update the state
    const setValue = (value: T | ((val: T) => T)) => {
        try {
            // If value is a function, execute it with the current state
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save the new value in state
            setStoredValue(valueToStore);
            // Save the new value in localStorage
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error("Error setting localStorage", error);
        }
    };

    return [storedValue, setValue];
}

export default useLocalStorage;
