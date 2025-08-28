export type GiphyImage = {
  url: string;
  width: string;
  height: string;
  size?: string;
};

export type GiphyItem = {
  id: string;
  title: string;
  images: { downsized_medium: GiphyImage };
};

export type GiphyResponse = { data: GiphyItem[]; pagination: { total_count: number; count: number; offset: number } };
