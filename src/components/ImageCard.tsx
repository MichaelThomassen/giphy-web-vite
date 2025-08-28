import type { Pos } from "../hooks/useSearchParamsState";
type Props = { src: string; alt: string; text: string; pos: Pos };

export function ImageCard({ src, alt, text, pos }: Props) {
  return (
    <div className="card">
      <img src={src} alt={alt} loading="lazy" />
      {pos !== "below" && text && <div className={`overlay ${pos === "top" ? "at-top" : "at-bottom"}`}>{text}</div>}
      {pos === "below" && text && <div className="below">{text}</div>}
    </div>
  );
}
