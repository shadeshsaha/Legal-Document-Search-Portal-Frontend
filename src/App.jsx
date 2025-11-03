import { Layout, Typography } from "antd";
import ResultList from "./components/ResultList.jsx";
import SearchBar from "./components/SearchBar.jsx";

const { Title } = Typography;
const { Header, Content } = Layout;

export default function App() {
  return (
    <Layout style={{ minHeight: "100vh", padding: 20 }}>
      <Header style={{ backgroundColor: "#001529", padding: "1rem" }}>
        <Title style={{ color: "#fff", margin: 0 }} level={2}>
          Legal Document Search Portal
        </Title>
      </Header>
      <Content style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
        <SearchBar />
        <ResultList />
      </Content>
    </Layout>
  );
}
