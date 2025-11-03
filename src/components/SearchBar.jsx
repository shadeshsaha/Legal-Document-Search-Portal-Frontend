import { Input, Space } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearResults, fetchResults } from "../features/searchSlice";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(fetchResults(query));
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    // If input is cleared, reset the state
    if (value.trim() === "") {
      dispatch(clearResults());
    }
  };

  return (
    <Space style={{ width: "100%", marginTop: 20 }}>
      <Input.Search
        placeholder="Search legal documents..."
        value={query}
        // onChange={(e) => setQuery(e.target.value)}
        onChange={handleChange}
        onSearch={handleSearch}
        enterButton
        allowClear
        style={{ flex: 1 }}
      />
    </Space>
  );
};

export default SearchBar;
