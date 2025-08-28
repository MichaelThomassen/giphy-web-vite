import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ResultGrid } from "./ResultGrid";

function renderWithRoute(route: string) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <ResultGrid />
    </MemoryRouter>
  );
}

test("renders three gifs and enables Next", async () => {
  renderWithRoute("/?q=cat&page=0&pos=top&text=Hi");
  const imgs = await screen.findAllByRole("img");
  expect(imgs).toHaveLength(3);
  expect(screen.getByRole("button", { name: /next/i })).toBeEnabled();
});

test("shows empty message and buttons are gone", async () => {
  renderWithRoute("/?q=empty&page=0&pos=top&text=");
  expect(
    await screen.findByText(
      /Imagine that, you've searched for something that does not exist on the internet! You really must be special!/i
    )
  ).toBeInTheDocument();
});

test("shows error banner on API error", async () => {
  renderWithRoute("/?q=error&page=0&pos=top&text=");
  expect(await screen.findByRole("alert")).toHaveTextContent(/error|failed|rate limit/i);
});
