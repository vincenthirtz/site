import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Layout from "components/Layout/Layout";
import NotFound from "components/NotFound/NotFound";
import Home from "components/Home/Home";
import Blog from "components/Blog/Blog";


const App = () => (<Router>
  <Switch>
    <Layout exact path="/" component={Home} />
    <Layout exact path="/blog" component={Blog} />
    <Layout path="*" component={NotFound} />
  </Switch>
</Router>);

export default App;
