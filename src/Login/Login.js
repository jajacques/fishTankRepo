import React, { Component } from 'react';
// import {Button, createMuiTheme, Link, MuiThemeProvider, TextField} from '@material-ui/core';
import {Button, Link, TextField} from '@material-ui/core';
import { withRouter } from 'react-router';
import './Login.css';

class Login extends Component {
    render() {
        return (
                <div className="login-div">
                    <img src="/FishLogo.svg" alt="Logo" />
                    <p className="msg">Welcome Back!</p>
                    <div className = "LoginForm">
                        <div id = "txtEmail">
                            <TextField id = "email"
                                       label="Name"
                                       // value={this.state.name}
                                       // onChange={this.handleChange('name')}
                                       margin="normal"/>
                        </div>
                        <div id = "txtPassword">
                            <TextField id = "password"
                                       label = "Password"
                                       // value={this.state.name}
                                       margin = "normal"
                            />
                        </div>
                    </div>
                    <Button component={Link} href={'/feed'} variant="contained" color="primary">
                        Login
                    </Button>
                </div>
        );
    }
}

export default withRouter(Login);
