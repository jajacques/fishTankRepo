import React, {Component} from 'react';
import {IconButton, Button, Grid, ButtonGroup, Toolbar, Typography, Link} from '@material-ui/core';
import "./NavBar.css";

class NavBar extends Component {

    // Creates The Component//
    render() {
        return <div className = "div-bar">
                <img src="/FishLogo.svg" alt="Logo" height = "80vh"/>
            <Grid item xs={12} md={6}>
                <ButtonGroup
                    className = "GroupName"
                    fullWidth aria-label="full width outlined button group">
                    <Button component={Link} href={'/feed'}>Home</Button>
                    <Button component={Link} href={'/feed'}>Tanks</Button>
                    <Button href={'/NitrogenCycle'}>Information</Button>
                </ButtonGroup>
            </Grid>
        </div>
    }

}
export default NavBar;