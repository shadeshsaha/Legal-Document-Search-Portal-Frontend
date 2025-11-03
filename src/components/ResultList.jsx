import { Alert, Card, Empty, Spin, Typography } from "antd";
import { useSelector } from "react-redux";

const { Paragraph } = Typography;

const ResultList = () => {
  const { results, loading, error } = useSelector((state) => state.search);

  if (loading) return <Spin tip="Loading..." style={{ marginTop: 50 }} />;
  if (error)
    return (
      <Alert
        message="No results found"
        description={error}
        type="error"
        style={{ marginTop: 50 }}
      />
    );

  // When no results yet or after clearing search
  if (!results) {
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Start typing to search legal documents."
        style={{ marginTop: 50 }}
      />
    );
  }

  return results.map((res) => (
    <Card
      key={res.document._id}
      title={res.document.title}
      style={{ marginTop: 20 }}
      hoverable
    >
      <Paragraph>{res.summary}</Paragraph>
    </Card>
  ));
};

export default ResultList;
