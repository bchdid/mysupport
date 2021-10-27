import React from 'react';
import {
    Button,
    Input,
  } from 'reactstrap';
  import { cloneDeep, remove, includes } from "lodash"

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            UserName:"",
            Password:""
        };
    }

    componentDidMount = () => {
    }

    login = () => {
      debugger
         if ((this.state.UserName.toLowerCase() === "ea" && this.state.UserName.toLowerCase() === "ea") ||
         (this.state.UserName.toLowerCase() === "ja" && this.state.UserName.toLowerCase() === "ja")){
          localStorage.setItem('userName', "ea");
          this.props.setIsAuthenticated("ea")
          this.props.history.push("/Dashborad");
        }
      }

    handleTextChange = val => event => {
        let tempMandatory = cloneDeep(this.state.tempMandatory)
        let { mandatoryFields } = this.state
    
        if (includes(mandatoryFields, val)) {
          tempMandatory = remove(tempMandatory, element => {
            return element !== val
          })
        }
        this.setState({ tempMandatory, [val]: event.target.value, showErrorMessage: '' })
      }

    render() {
        let {UserName,Password} = this.state
        return (
            <div id="loginMainContainer"  >
             <div className="col-12 mt-3">
                    <Input type="text" name="UserName" id="UserName"
                      value={UserName ? UserName : ""}
                      placeholder="UserName"
                      onChange={this.handleTextChange("UserName")} />
                  </div>
                  <div className="col-12 mt-3">
                    <Input type="password" name="Password" id="Password"
                      value={Password ? Password : ""}
                      placeholder="Password"
                      onChange={this.handleTextChange("Password")} />
                  </div>
              <Button className="mt-3" onClick={this.login}>Login</Button>
            </div>
        )
    }
}

export default Login;

