import { renderHook, waitFor } from "@testing-library/react";
import { useGiphySearch } from "./useGiphySearch";

test('returns data for query "cat"', async () => {
  const { result } = renderHook(() => useGiphySearch("cat", 0));
  await waitFor(() => expect(result.current.loading).toBe(false));
  expect(result.current.data?.length).toBe(3);
  expect(result.current.hasNext).toBe(true);
});
