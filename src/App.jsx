import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { hot } from 'react-hot-loader'
import Home from './containers/Home'
import AboutMe from './containers/AboutMe'
import Showcase from './containers/Showcase'
import Blogs from './containers/Blogs'
import Blog from './containers/Blog'
import Header from './components/common/Header'
import Footer from './components/common/Footer'
import Draft from './containers/Draft'


class App extends Component {

  static propTypes = {

  }

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutMe} />
            <Route path="/books" component={Showcase} />
            <Route path="/blogs" component={Blogs} />
            <Route path="/blog/:id" component={Blog} />
            <Route path="/draft" component={Draft} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter >
    )
  }
}



export default hot(module)(App)