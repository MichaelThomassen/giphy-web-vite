import { type FormEvent, useState } from "react";
import { type Pos, useQueryState } from "../hooks/useSearchParamsState";

export function SearchForm() {
  const { q, text, pos, update } = useQueryState();
  const [locQ, setLocQ] = useState(q);
  const [locText, setLocText] = useState(text);
  const [locPos, setLocPos] = useState<Pos>(pos);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    update({ q: locQ.trim(), text: locText, pos: locPos, page: 0 });
  }

  return (
    <form onSubmit={onSubmit} aria-label="Search images">
      <label>
        Query
        <input value={locQ} onChange={(e) => setLocQ(e.target.value)} placeholder="corgi puppy" />
      </label>
      <label>
        Text
        <input value={locText} onChange={(e) => setLocText(e.target.value)} placeholder="Awwww" />
      </label>
      <label>
        Placement
        <select value={locPos} onChange={(e) => setLocPos(e.target.value as Pos)}>
          <option value="top">Top image</option>
          <option value="bottom">Bottom image</option>
          <option value="below">Below image</option>
        </select>
      </label>
      <button type="submit" disabled={!locQ.trim()}>
        Search
      </button>
    </form>
  );
}
