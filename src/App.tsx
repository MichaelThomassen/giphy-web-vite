import { BrowserRouter } from "react-router-dom";
import { SearchForm } from "./components/SearchForm";
import { ResultGrid } from "./components/ResultGrid";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <main>
        <section className="query">
          <SearchForm />
        </section>
        <section className="results">
          <ResultGrid />
        </section>
      </main>
    </BrowserRouter>
  );
}
