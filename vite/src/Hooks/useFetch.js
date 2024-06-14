// research on tanstack query package

import { useEffect, useState } from "react";
import instance from "../utils/axios";

const useFetch = ({ url }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const getData = async (url) => {
      try {
        setLoading(true);
        const { data } = await instance.get(url, {
          signal: controller.signal,
        });
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
        setTimeout(() => {
          setError("");
        }, 1000);
      }
    };
    getData(url);
    return () => {
      controller.abort();
    };
  }, [url]);
  return { loading, error, data };
};

export default useFetch;
