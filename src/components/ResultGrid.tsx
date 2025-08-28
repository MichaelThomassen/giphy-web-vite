import { useGiphySearch } from "../hooks/useGiphySearch";
import { useQueryState } from "../hooks/useSearchParamsState";
import { ImageCard } from "./ImageCard";

export function ResultGrid() {
  const { q, text, pos, page, update } = useQueryState();
  const { data, loading, err, hasPrev, hasNext } = useGiphySearch(q, page);

  if (!q) return <p>What's on the menu today?</p>;
  if (loading) return <p>Making coffee!</p>;
  if (err) return <p role="alert">{err}</p>;
  if (!data || data.length === 0)
    return (
      <p>
        Imagine that, you've searched for something that does not exist on the internet! You really must be special!
      </p>
    );

  return (
    <>
      <div className="grid">
        {data.map((item) => (
          <ImageCard
            key={item.id}
            src={item.images.downsized_medium.url}
            alt={item.title || "GIF"}
            text={text}
            pos={pos}
          />
        ))}
      </div>
      <div className="pager">
        <button onClick={() => update({ page: page - 1 })} disabled={!hasPrev} aria-label="Previous">
          Prev
        </button>
        <span>Page {page + 1}</span>
        <button onClick={() => update({ page: page + 1 })} disabled={!hasNext} aria-label="Next">
          Next
        </button>
      </div>
    </>
  );
}
