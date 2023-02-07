import { useState, useEffect } from "react";

const useFetch = url => {
  const [data, setData] = useState(null);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then(res => {
          return res.json();
        })
        .then(result => {
          setData(result);
          setIsLoad(true);
        })
        .catch(err => {
          err.name === "AbortError" ? console.log("s") : console.log(err.message);
        });
    }, 10);

    return () => abortCont.abort();
  }, [url]);

  return { data, isLoad };
};

export default useFetch;
