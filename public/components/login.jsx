// import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }

  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }

  // loginTest() {
  //   return this.state.loggedIn ? 'Logout' : 'Login';
  // }

  render() {
    const loggedIn = this.state.loggedIn? 'Logout' : 'Login';
    return (
      <div id="loginComponent">
        <button type="button" onClick={this._onButtonClick}>{loggedIn}</button>
        {this.state.showComponent ?
          <div id="loginForm">
            <p>
              <input type="text" name="login" value="" placeholder="Email">
              </input>
            </p>
            <p>
              <input type="password" name="password" value="" placeholder="Password">
              </input>
            </p>
            <p class="submit">
              <input type="submit" name="commit" value="Login">
              </input>
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
