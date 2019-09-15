import React, { Component } from 'react';

import './Button.css';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div className="hero-wrapper">
                <div className="home-hero">
                    <picture>
                        <img src="https://s3-ap-southeast-2.amazonaws.com/hardedm.com.au/emailImages/2019-08-15/header.jpg" className="background" alt="home hero" />
                    </picture>
                    <div className="container">
                        <div className="home-hero-cont">
                            <div className="home-hero-heading">
                                <em>6 October 2019</em>
                                <span>Fortitude Music Hall, Brisbane</span>
                            </div>

                            <a href="https://www.facebook.com/events/1159645947552668/" className="button btn-home-hero" rel="noopener noreferrer" target="_blank">More Info</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hero;
