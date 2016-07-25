"use strict";

var Instrument = function Instrument(_ref) {
  var instrument = _ref.instrument;
  var handleClick = _ref.handleClick;
  return React.createElement(
    "div",
    { className: "instrumentNav", onClick: function onClick() {
        return handleClick(instrument);
      } },
    React.createElement(
      "button",
      { className: "button" },
      instrument
    )
  );
};

window.Instrument = Instrument;