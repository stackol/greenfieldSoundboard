// import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  attemptLogin() {
    console.log("email", this.state.email);
    console.log("password", this.state.password);
    $.ajax({
      type: "POST",
      url: "/login",
      processData: false,
      contentType: "application/json",
      data: JSON.stringify({
        email:    this.state.email,
        password: this.state.password
      }),
      success: function(){
        console.log("device control succeeded");
        console.log("woohoooo");
      },
      error: function(err){
        console.log("Error!!", err);
        console.log("arguments", arguments);
      }
    });
  }

  render() {
    const loggedIn = this.state.loggedIn? 'Logout' : 'Login';
    return (
      <div id="loginComponent">
        {this.state.showComponent ?
          null :
          <button type="button" onClick={this._onButtonClick}>{loggedIn}</button>
        }
        {this.state.showComponent ?
          <div id="loginForm">
            <p>
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
            </p>
            <p>
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
            </p>
            <p class="submit">
              <input type="submit" value="Login" onClick={this.attemptLogin.bind(this)} />
            </p>
          </div> :
          null
        }
      </div>
    );
  }
}

window.Login = Login;
// export default Login;
