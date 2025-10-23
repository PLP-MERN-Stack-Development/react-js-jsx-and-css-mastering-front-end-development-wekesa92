import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading };
}
