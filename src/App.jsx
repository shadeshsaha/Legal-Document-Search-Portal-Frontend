import ResultList from "./components/ResultList.jsx";
import SearchBar from "./components/SearchBar.jsx";

export default function App() {
  return (
    <div
      style={{
        padding: "2rem",
        maxWidth: "800px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Legal Document Search Portal</h1>
      <SearchBar />
      <ResultList />
    </div>
  );
}
