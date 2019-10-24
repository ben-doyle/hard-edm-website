import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
    state: HeaderState;

    constructor(props: any) {
        super(props);
        this.state = { scrolled: false }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event: any) => {
        if (window.scrollY < 20) {
            this.setState({ scrolled: false })
        } else {
            this.setState({ scrolled: true })
        }
    }

    render() {
        return (
            <header className="site-header">
                <nav id="site-navigation" className="main-navigation" role="navigation">
                    <div className="navbar navbar-default" style={ this.state.scrolled ? { backgroundColor: "black" } : {} }>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3">
                                    <div className="navbar-header">
                                        <a className="navbar-brand" href="/" rel="home" aria-label="Back to home">
                                            <img src="assets/img/hardedm.png" alt="Hard EDM logo"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="navbar-collapse collapse" id="navbar-menu" aria-expanded="false">
                                        <div>
                                            <ul id="primary-menu" className="global-navbar__list"><li id="menu-item-36" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"><a href="https://www.facebook.com/groups/HardEDMBrisbane/events/">Events</a></li>
                                                <li id="menu-item-37" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"><a href="https://www.facebook.com/groups/HardEDMBrisbane/photos/?filter=albums">Galleries</a></li>
                                                <li id="menu-item-38" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"><a target="_blank" href="/">Shop</a></li>
                                            </ul>                            
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3 hidden-xs hidden-sm">
                                    <div className="socials header-social-icons">
                                        <a href="https://www.facebook.com/groups/HardEDMBrisbane" className="facebook" target="_blank" rel="noopener noreferrer">facebook</a>
                                        <a href="https://www.instagram.com/dreamstateusa/" className="instagram" target="_blank" rel="noopener noreferrer">instagram</a><a href="https://twitter.com/DreamstateUSA" className="twitter" target="_blank" rel="noopener noreferrer">twitter</a>                    </div>
                                </div>
                            </div>
                        </div>
                    </div></nav>    <script type="text/javascript">
                </script>
            </header>
        );
    }
}

interface HeaderState {
    scrolled: boolean
}

export default Header;
