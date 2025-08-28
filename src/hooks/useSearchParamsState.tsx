import { useSearchParams } from "react-router-dom";

export type Pos = "top" | "bottom" | "below";

export function useQueryState() {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const text = searchParams.get("text") ?? "";
  const pos = (searchParams.get("pos") as Pos) ?? "top";
  const page = Number(searchParams.get("page") ?? "0");

  function update(next: Partial<{ q: string; text: string; pos: Pos; page: number }>) {
    const n = new URLSearchParams(searchParams);
    if (next.q !== undefined) n.set("q", next.q);
    if (next.text !== undefined) n.set("text", next.text);
    if (next.pos !== undefined) n.set("pos", next.pos);
    if (next.page !== undefined) n.set("page", String(next.page));
    setSearchParams(n, { replace: false });
  }
  return { q, text, pos, page, update };
}
