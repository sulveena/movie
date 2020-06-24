import React from "react";
import "./App.css";
import SearchBox from "./components/search/search";
import { Layout, Typography } from "antd";
import "antd/dist/antd.css";
const { Header, Content, Footer } = Layout;
const TextTitle = Typography.Title;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div style={{ textAlign: "center" }}>
            <TextTitle className="headerTitle">Movie Database</TextTitle>
          </div>
        </Header>
        <Content className="contentStyle">
          <div className="contentBody">
            <SearchBox />
          </div>
        </Content>
        <Footer className="footer">Copyright Information @2020</Footer>
      </Layout>
    </div>
  );
}

export default App;
