import { useState, useEffect, useCallback } from "react";

export default function useUsuario<T>(
  fetchFunction: () => Promise<T>,
  dependencies: any[] = []
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await fetchFunction();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro desconhecido");
    } finally {
      setIsLoading(false);
    }
  }, [fetchFunction, ...dependencies]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, isLoading, refresh: fetchData };
}
