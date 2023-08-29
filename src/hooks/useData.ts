import { useEffect, useState } from "react";
import apiClient, { AxiosError, CanceledError } from "../services/apiClient";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      //the T below is the same T that is passed to our hook
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((e) => {
        if (e instanceof CanceledError) return;
        setError((e as AxiosError).message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};
