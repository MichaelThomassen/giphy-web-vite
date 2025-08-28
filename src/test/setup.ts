/// <reference types="vitest/globals" />
import "@testing-library/jest-dom";
import { server } from "./msw/server";

// Start/stop MSW (node) for tests
beforeAll(() => server.listen({ onUnhandledRequest: "warn" }));
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
