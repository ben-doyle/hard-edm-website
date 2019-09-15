import React, { Component } from 'react';
import Hero from './components/Hero';
import Header from './components/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <Hero/>
        <div>
          <img className="App-logo" src="assets/img/hardedm.png" alt="Hard EDM logo"/>
        </div>
        <a href="http://www.twitter.com/hardedmbrisbane"><img src="assets/img/twitter-wrap.png" alt="Twitter Logo" className="social-icons"/></a>
        <a href="https://www.facebook.com/groups/HardEDMBrisbane/"><img src="assets/img/facebook-wrap.png" alt="Facebook Logo" className="social-icons"/></a>
        <a href="http://www.instagram.com/hardedmbrisbane"><img src="assets/img/instagram-wrap.png" alt="Instagram Logo" className="social-icons"/></a>
        <a href="snapchat.html"><img src="assets/img/snapchat-wrap.png" alt="Snapchat Logo" className="social-icons"/></a>
        <p>Copyright &copy; Hard EDM Brisbane 2016</p>
      </div>
    );
  }
}

export default App;
