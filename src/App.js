import React, {Component} from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Login from "./Login/Login"
// import logo from './logo.svg';
import Feed from "./Feed/Feed"
import NitrogenCycle from './NitrogenCycle/NitrogenCycle'
import './App.css';

class App extends Component {

    // Creates The Component//
    render() {
      return (
          <Router>
            <Switch>
              <Route key={'login'} path={'/login'} component={Login} />
              <Route key={'Feed'} path={'/Feed'} component={Feed} />
              <Route key={'NitrogenCycle'} path={'/NitrogenCycle'} component={NitrogenCycle} />
              {/*<Route key={'homePage'} path={'/homePage'} component={HomePage} />*/}
              <Route>
                <Redirect to={'/login'}/>
              </Route>
            </Switch>
          </Router>
      );
    }
}
export default App;

