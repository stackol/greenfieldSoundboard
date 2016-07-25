"use strict";

var SongList = function SongList(_ref) {
   var songs = _ref.songs;
   var handleClick = _ref.handleClick;


   var entriesToList = songs.split(',').map(function (song, idx) {
      return React.createElement(
         "li",
         { className: "song-list-entry", key: idx, onClick: function onClick() {
               handleClick(entry);
            } },
         song
      );
   });

   return React.createElement(
      "ul",
      { className: "song-list media" },
      entriesToList
   );
};

window.SongList = SongList;