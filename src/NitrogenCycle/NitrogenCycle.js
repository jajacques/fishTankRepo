import React, { Component } from 'react';
import {Button, createMuiTheme, Link, MuiThemeProvider} from '@material-ui/core';
import { withRouter } from 'react-router';
import './NitrogenCycle.css';
import NavBar from '../Common/NavBar.js';

class Feed extends Component {
    render() {
        return <div>
            <NavBar/>
            <div className="Main-Nitro">
                {/*<div className = "img-div">*/}
                    <img src="./NitrogenCycle.jpg" alt="Imagery of NitrogenCycle" class = "img-div"/>
                {/*</div>*/}
            </div>
        </div>
    }
}

export default withRouter(Feed);


