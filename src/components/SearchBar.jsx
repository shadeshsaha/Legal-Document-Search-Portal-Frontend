import { Input } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchResults } from "../features/searchSlice.js";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (!query.trim()) return;
    dispatch(fetchResults(query));
  };

  return (
    <Input.Search
      placeholder="Search legal documents..."
      enterButton="Search"
      size="large"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      onSearch={handleSearch}
      style={{ width: "100%", marginBottom: "1rem" }}
    />
  );
}
