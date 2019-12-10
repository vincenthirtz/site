import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Layout from "components/Layout/Layout";
import NotFound from "components/NotFound/NotFound";
import Home from "components/Home/Home";
import Blog from "components/Blog/Blog";
import Portfolio from "components/Portfolio/Portfolio";
import BlogPost from "components/Blog/Blogpost";

const App = () => (<Router>
  <Switch>
    <Layout exact path="/" Component={Home} />
    <Layout exact path="/blog" Component={Blog} />
    <Layout path='/blog/:blogPost' Component={BlogPost}/>
    <Layout exact path="/portfolio" Component={Portfolio} />
    <Layout path="*" Component={NotFound} />
  </Switch>
</Router>);

export default App;
