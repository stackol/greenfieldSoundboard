// import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this._onLoginButtonClick = this._onLoginButtonClick.bind(this);
    this.attemptLogin = this.attemptLogin.bind(this);
  }

  _onLoginButtonClick() {
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
    var that = this;
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
        console.log('sucesss');
        that.setState({
          showComponent: false,
          loggedIn: true
        });
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
          <button type="button" onClick={this._onLoginButtonClick}>{loggedIn}</button>
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
              <input type="submit" value="Login" onClick={this.attemptLogin} />
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
