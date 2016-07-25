"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React from 'react';

var Login = function (_React$Component) {
  _inherits(Login, _React$Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Login).call(this, props));

    _this.state = {
      showComponent: false
    };
    _this._onButtonClick = _this._onButtonClick.bind(_this);
    return _this;
  }

  _createClass(Login, [{
    key: "_onButtonClick",
    value: function _onButtonClick() {
      this.setState({
        showComponent: true
      });
    }
  }, {
    key: "handleEmailChange",
    value: function handleEmailChange(event) {
      this.setState({ email: event.target.value });
    }
  }, {
    key: "handlePasswordChange",
    value: function handlePasswordChange(event) {
      this.setState({ password: event.target.value });
    }
  }, {
    key: "attemptLogin",
    value: function attemptLogin() {
      console.log("email", this.state.email);
      console.log("password", this.state.password);
      $.ajax({
        type: "POST",
        url: "/login",
        processData: false,
        contentType: "application/json",
        data: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        }),
        success: function success() {
          console.log("device control succeeded");
          console.log("woohoooo");
        },
        error: function error(err) {
          console.log("Error!!", err);
          console.log("arguments", arguments);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var loggedIn = this.state.loggedIn ? 'Logout' : 'Login';
      return React.createElement(
        "div",
        { id: "loginComponent" },
        this.state.showComponent ? null : React.createElement(
          "button",
          { type: "button", onClick: this._onButtonClick },
          loggedIn
        ),
        this.state.showComponent ? React.createElement(
          "div",
          { id: "loginForm" },
          React.createElement(
            "p",
            null,
            React.createElement("input", { type: "text", value: this.state.email, placeholder: "Email", onChange: this.handleEmailChange.bind(this) })
          ),
          React.createElement(
            "p",
            null,
            React.createElement("input", { type: "password", value: this.state.password, placeholder: "Password", onChange: this.handlePasswordChange.bind(this) })
          ),
          React.createElement(
            "p",
            { "class": "submit" },
            React.createElement("input", { type: "submit", value: "Login", onClick: this.attemptLogin.bind(this) })
          )
        ) : null
      );
    }
  }]);

  return Login;
}(React.Component);

window.Login = Login;
// export default Login;