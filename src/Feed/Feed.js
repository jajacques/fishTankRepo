import React, { Component } from 'react';
import {Button, createMuiTheme, Link, MuiThemeProvider} from '@material-ui/core';
import { withRouter } from 'react-router';
import './Feed.css';
import NavBar from '../Common/NavBar.js';

class Feed extends Component {
    render() {
        return <div>
            <NavBar/>
            <div className="Main-div">
                <div className = "Indiv-Tank">
                    <Button>Ammonia</Button>
                    <Button>PH Level</Button>
                    <Button>Nitrites</Button>
                    <Button>Nitrates</Button>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Feed);