import { useEffect, useState } from "react";

export const useLocalStorage = <T>(key: string, initialValue: T | (() => T)) => { 
  const [value, setValue] = useState<T | null>(null); 
  
  useEffect(() => {
    const jsonValue = localStorage.getItem(key) as T;
    if (jsonValue != null) setValue(jsonValue);
    else if (typeof initialValue === "function") setValue((initialValue as () => T)());
    else setValue(initialValue);
  }, []);

  useEffect(() => {
    if (value != null) localStorage.setItem(key, typeof value === "string" ? value : JSON.stringify(value));
  }, [key, value]);
  
  return [value, setValue] as [T, typeof setValue];
}