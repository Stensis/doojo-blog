import { useEffect, useState } from "react";

function UseFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch that resource");
        }
        return res.json();
      })
      .then((data) => {
        // setData(data.sort((a, b) => b.date - a.date));
        // console.log(data)
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
}

export default UseFetch;
