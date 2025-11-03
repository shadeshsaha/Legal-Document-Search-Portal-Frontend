import { useSelector } from "react-redux";

export default function ResultList() {
  const { results, loading, error } = useSelector((state) => state.search);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  if (!results.length) return <p>No results yet.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {results.map((doc) => (
        <li
          key={doc._id}
          style={{
            marginBottom: "1rem",
            padding: "1rem",
            border: "1px solid #ccc",
            borderRadius: "8px",
          }}
        >
          <h3>{doc.title}</h3>
          <p>{doc.summary}</p>
        </li>
      ))}
    </ul>
  );
}
