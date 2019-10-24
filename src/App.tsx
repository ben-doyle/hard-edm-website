import React, { Component } from 'react';
import Hero from './components/Hero/Hero';
import Header from './components/Header/Header'
import './App.scss';
import { Container } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TopLevelCard from "./components/Card/TopLevelCard";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet"></link>
        <Hero/>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TopLevelCard title="Events" image="https://s3-ap-southeast-2.amazonaws.com/hardedm.com.au/assets/img/hardstyle-halloween.jpg"/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TopLevelCard title="Galleries" image="https://s3-ap-southeast-2.amazonaws.com/hardedm.com.au/assets/img/gallery-image.jpg"/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <TopLevelCard title="Shop" image="https://s3-ap-southeast-2.amazonaws.com/hardedm.com.au/assets/img/merch.jpg"/>
            </Grid>
          </Grid>
        </Container>
        <Container className="Hard-Edm-Logo">
          <img className="App-logo" src="assets/img/hardedm.png" alt="Hard EDM logo"/>
        </Container>
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
