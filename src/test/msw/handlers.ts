import { http, HttpResponse } from "msw";

const API = "https://api.giphy.com/v1/gifs/search";

export const handlers = [
  http.get(API, ({ request }) => {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");

    if (q === "empty") {
      return HttpResponse.json({
        data: [],
        pagination: { total_count: 0, count: 0, offset: 0 },
      });
    }

    if (q === "error") {
      return HttpResponse.json({ message: "rate limit" }, { status: 429 });
    }

    return HttpResponse.json({
      data: [
        { id: "1", title: "a", images: { downsized_medium: { url: "https://x/1.gif", width: "200", height: "150" } } },
        { id: "2", title: "b", images: { downsized_medium: { url: "https://x/2.gif", width: "200", height: "150" } } },
        { id: "3", title: "c", images: { downsized_medium: { url: "https://x/3.gif", width: "200", height: "150" } } },
      ],
      pagination: { total_count: 10, count: 3, offset: 0 },
    });
  }),
];
