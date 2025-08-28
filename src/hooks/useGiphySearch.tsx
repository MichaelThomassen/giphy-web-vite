import { useEffect, useState } from "react";
import type { GiphyResponse, GiphyItem } from "../types";

// API endpoint and key from environment
const API = "https://api.giphy.com/v1/gifs/search";
const KEY = import.meta.env.VITE_GIPHY_API_KEY;

export function useGiphySearch(q: string, page: number) {
  const [data, setData] = useState<GiphyItem[] | null>(null);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    if (!q) {
      setData(null);
      setTotal(0);
      return;
    }
    const controller = new AbortController();
    const params = new URLSearchParams({
      q,
      rating: "g",
      limit: "3",
      offset: String(page * 3),
      api_key: KEY,
    });
    setLoading(true);
    setErr(null);
    fetch(`${API}?${params}`, { signal: controller.signal })
      .then((result) => (result.ok ? (result.json() as Promise<GiphyResponse>) : Promise.reject(result)))
      .then((json) => {
        setData(json.data);
        setTotal(json.pagination.total_count);
      })
      .catch((e) => {
        if (e.name !== "AbortError") setErr("Failed to load");
      })
      .finally(() => setLoading(false));
    return () => controller.abort();
  }, [q, page]);

  const hasPrev = page > 0;
  const hasNext = (page + 1) * 3 < total;

  return { data, total, loading, err, hasPrev, hasNext };
}
