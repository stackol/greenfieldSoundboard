// import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.attemptLogin = this.attemptLogin.bind(this);
    this.cancelLogin = this.cancelLogin.bind(this);
  }

  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }

  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }

  attemptLogin() {
    var that = this;
    $.ajax({
      type: "POST",
      url: "/login",
      processData: false,
      contentType: "application/json",
      data: JSON.stringify({
        email:    this.state.email,
        password: this.state.password
      }),
      success: function(user){
        that.props.loginSuccess(user);
        that.setState({
          email: '',
          password: ''
        });
      },
      error: function(err){
        console.log("Error!!", err);
      }
    });
  }

  cancelLogin() {
    console.log("got to cancelLogin woooooo!!");
    console.log("this", this);
    this.props.removeModal('login');
  }

  render() {
    const loggedIn = this.props.loggedIn ? 'Logout' : 'Login';
    const sideModals = this.props.sideModals;
    const currentUser = this.props.currentUser;
    return (
      <div id="loginComponent">
        { sideModals.indexOf('login') !== -1 ?
          null :
          <button type="button" className="button" onClick={this.props._onLoginButtonClick}>{loggedIn}</button>
        }
        { sideModals.indexOf('login') !== -1 ?
          <div id="loginForm">
            <p>
              <input type="text" value={this.state.email} placeholder="Email" onChange={this.handleEmailChange.bind(this)} />
            </p>
            <p>
              <input type="password" value={this.state.password} placeholder="Password" onChange={this.handlePasswordChange.bind(this)} />
            </p>
            <div class="buttons">
              <button type="button" className="floated button" value="Login" onClick={this.attemptLogin}>Login</button>
              <button type="button" className="floated button" value="Cancel" onClick={this.cancelLogin}>Cancel</button>
            </div>
          </div> :
          null
        }
      </div>
    );
  }
}

window.Login = Login;
// export default Login;
