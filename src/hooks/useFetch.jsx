import { useEffect, useState } from "react";

 function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, SetError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);

        if (req.status !== 200) {
          throw new Error(req.message);
        }
        const data = await req.json();
        setData(data);
        SetError(null);
        setIsPending(false);
      } catch (error) {
        SetError(error);
        setData(null);
        setIsPending(false);
      }
    };
    getData();
  }, [url]);

  return { data, isPending, error };
}
export default useFetch;