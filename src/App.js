import React from 'react';
import './App.css';
import MainNavigator from './appContainers/MainNavigator';
import { Router, Switch, Route } from "react-router-dom";
import { Spinner } from 'reactstrap';
import { createHashHistory } from 'history';
import { isEmpty } from 'lodash';

import Login from './appContainers/appMainPages/Login';
import Dashborad from './appContainers/dashborad/Dashborad';
import PageOne from './appContainers//PageOne';
import PageTwo from './appContainers//PageTwo';

const history = createHashHistory()

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUser: ''
    };
  }

  setIsAuthenticated = (loginUser) => {
    this.setState({ loginUser })
  }

  render() {
    let { loginUser } = this.state
    debugger
    return (
      <div className="App">
        {isEmpty(localStorage.userName) ?
          //  { isEmpty(loginUser) ? 
          <Login history={history} setIsAuthenticated={this.setIsAuthenticated} />
          :
          <>
            <div id="SpinnerMaincontainer">
              <Spinner id="Spinnercontainer" color="primary" />
            </div>
            <div id="AppHeaderContainer">
              <MainNavigator history={history} loginUser={loginUser} setIsAuthenticated={this.setIsAuthenticated} />
            </div>
            <div id="AppBodyContainer" style={{ height: "calc(100% - 81px)" }} >
              <Router history={history}>
                <Switch>
                  {/* <Route path="/Login" render={() => <Login history={history} setIsAuthenticated={this.setIsAuthenticated} />} /> */}
                  <Route path="/Dashborad" component={Dashborad} />
                  <Route path="/PageOne" component={PageOne} />
                  <Route path="/PageTwo" component={PageTwo} />
                  <Route path="/" exact component={Dashborad} />
                  {/* <Redirect path="/" /> */}
                </Switch>
              </Router>
            </div>

          </>
        }
      </div>
    )
  }
}
export default App;

