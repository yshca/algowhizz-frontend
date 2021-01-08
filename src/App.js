import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './pages/Blog';
import Explore from './pages/Explore';
import Problems from './pages/Problems';
import Resources from './pages/Resources';
import Signup from './pages/Signup';
import HomePage from './pages/HomePage';
import WhyPage from './pages/WhyPage';
import Testimonials from './pages/Testimonials';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/explore' exact component={Explore} />
        <Route path='/problems' component={Problems} />
        <Route path='/resources' component={Resources} />
        <Route path='/blog' component={Blog} />
        <Route path='/signup' component={Signup} />
      </Switch>
      <HomePage />
      <WhyPage />
      <Testimonials />
      <Footer />
    </Router>
  );
}

export default App;
