import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact'
import Services from './pages/Services';
import About from './pages/About';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SingleBlog from './pages/SingleBlog';

function App() {

  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/services" component={Services} />
          <Route path = "/about" component={About} />
          <Route path = "/blog" component={Blog} />
          <Route path = "/login" component={Login} />
          <Route path ="/signup" component={Signup} />
          <Route path ="/blog-detail" component={SingleBlog} />
        </Switch>
      </>
    </Router>
  );
  
}

export default App;
