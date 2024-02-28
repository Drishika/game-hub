import { useEffect, useState } from 'react';
import { AxiosError, CanceledError } from 'axios';
import create from '../services/http-service';

 interface FetchResponse<T> {
    count: number;
    next: string;
    prev: string;
    results: T[];
  }
  
  

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { request, cancel } = create(endpoint).getAll<FetchResponse<T>>();
    request
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err: AxiosError) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => cancel();
  }, []);
  return { data, isLoading, error };
};

export default useData;
