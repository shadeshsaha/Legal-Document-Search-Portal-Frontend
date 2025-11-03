import { Alert, Card, List, Spin } from "antd";
import { useSelector } from "react-redux";

export default function ResultList() {
  const { results, loading, error } = useSelector((state) => state.search);
  
  if (loading) return <Spin tip="Searching..." size="large" style={{ marginTop: "2rem" }} />;
  if (error) return <Alert message="Error" description={error} type="error" showIcon />;
  if (!results.length) return <Alert message="No results yet" type="info" showIcon />;

  return (
    <List
      grid={{ gutter: 16, column: 1 }}
      dataSource={results}
      renderItem={(doc) => (
        <List.Item>
          <Card title={doc.title} hoverable style={{ border: "1px solid #f0f0f0", borderRadius: "8px" }} >
            {doc.summary}
          </Card>
        </List.Item>
      )}
    />
  );
}
