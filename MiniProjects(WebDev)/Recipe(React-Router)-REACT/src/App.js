import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Recipes from "./components/Recipes";
import AddRecipe from "./components/AddRecipe";
import Login from "./components/Login";
import { Layout, Typography, Menu, Col, Icon } from "antd";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const { Text } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout>
        <Header className="header">
          <Col span={6}>
            <h1 className="app-title">iCanCook!</h1>
          </Col>
          <Col span={10}>
            <Menu mode="horizontal" theme="dark" className="header-menu">
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="home" />
                  Home
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/about">
                  <Icon type="team" />
                  About
                </Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/recipes">
                  <Icon type="fire" />
                  Recipes
                </Link>
              </Menu.Item>
              <Menu.Item key="4">
                <Link to="/addrecipe">
                  <Icon type="edit" />
                  Add a Recipe
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} align="end">
            <Menu mode="horizontal" theme="dark" className="header-menu">
              <Menu.Item key="1">
                <Link to="/login">
                  <Icon type="login" />
                  Login
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Header>
        <Layout className="content-box">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/recipes">
              <Recipes />
            </Route>
            <Route path="/addrecipe">
              <AddRecipe />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </Layout>
        <Footer>
          <Text type="secondary">
            © The Good Food Company. All Rights Reserved
          </Text>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
