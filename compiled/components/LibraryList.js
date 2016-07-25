"use strict";

var LibraryList = function LibraryList(_ref) {
   var records = _ref.records;
   var handleClick = _ref.handleClick;


   var entriesToList = records.map(function (record, idx) {
      return React.createElement(
         "li",
         { className: "library-list-entry", key: idx, onClick: function onClick() {
               handleClick(record);
            } },
         record
      );
   });

   return React.createElement(
      "ul",
      { className: "library-list media" },
      entriesToList
   );
};

window.LibraryList = LibraryList;