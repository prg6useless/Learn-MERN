// prevent from frequent/unwanted api calls during search

import { useEffect, useState } from "react";

const useDebounce = ({ searchTerm, delay = 800 }) => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setResult(searchTerm);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm, delay]);

  return { result };
};

export default useDebounce;
