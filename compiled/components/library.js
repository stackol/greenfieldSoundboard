'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React, { Component, PropTypes } from 'react'
var Library = function (_React$Component) {
  _inherits(Library, _React$Component);

  function Library(props) {
    _classCallCheck(this, Library);

    // this._onButtonClick = this._onButtonClick.bind(this);
    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Library).call(this, props));

    console.log('record', _this.record, _this.clearRecord);
    return _this;
  }

  _createClass(Library, [{
    key: 'clearSong',
    value: function clearSong() {
      this.clearRecord();
    }
  }, {
    key: 'playSong',
    value: function playSong() {
      for (var i = 0; i < this.record.length; i++) {
        this.record[i].play();
      }
    }
  }, {
    key: 'saveSong',
    value: function saveSong() {}
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'div',
          { className: 'library' },
          React.createElement(
            'h2',
            null,
            'Library'
          ),
          React.createElement(
            'div',
            { width: '800', height: '300' },
            React.createElement('textarea', { width: '800', height: '300', id: 'library', value: this.record })
          )
        ),
        React.createElement(
          'div',
          null,
          React.createElement(
            'button',
            { type: 'button', onClick: this.clearSong },
            'Clear Song'
          ),
          React.createElement(
            'button',
            { type: 'button', onClick: this.saveSong },
            'Save Song'
          ),
          React.createElement(
            'button',
            { type: 'button', onClick: this.playSong },
            'Play Song'
          )
        )
      );
    }
  }]);

  return Library;
}(React.Component);

window.Library = Library;