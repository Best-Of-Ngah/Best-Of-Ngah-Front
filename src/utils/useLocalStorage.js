import { useState, useEffect } from "react";

export function useLocalStorage(key, options = {}) {
  const deserializer = (value) => {
    if (value === "undefined") {
      return undefined;
    }

    try {
      const parsed = JSON.parse(value);
      if (parsed !== null && typeof parsed === "object") {
        return parsed;
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return null;
    }
    return null;
  };

  const readValue = () => {
    if (typeof window === "undefined") {
      throw new Error("useLocalStorage must be used within a browser");
    }
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        return deserializer(item);
      }
      return null;
    } catch (error) {
      console.warn(error);
      return null;
    }
  };

  const [storedValue, setStoredValue] = useState(readValue());

  useEffect(() => {
    const serializer = (value) => {
      return JSON.stringify(value);
    };

    const newValue = storedValue;
    if (newValue !== null) {
      try {
        window.localStorage.setItem(key, serializer(newValue));
      } catch (error) {
        console.warn(error);
      }
    }
  }, [key, storedValue, options]);

  const setValue = (value) => {
    try {
      setStoredValue(value !== undefined ? value : null);
    } catch (error) {
      console.warn(error);
    }
  };

  const removeValue = () => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(null);
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    value: storedValue,
    setValue,
    removeValue,
  };
}
