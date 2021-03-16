import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/portfolio' component={Portfolio} />
          </Switch>
          <Footer />
      </div>
    </Router>
  );
}

export default App;