//import React, { Component, PropTypes } from 'react'
class Library extends React.Component{
   constructor(props) {
    super(props)
 
   // this._onButtonClick = this._onButtonClick.bind(this);
    console.log('record',this.record, this.clearRecord)
   }
  

  clearSong() {
     this.clearRecord()
  }

  playSong() {
    for (var i=0;i<this.record.length;i++){
      this.record[i].play()
    }
  }

  saveSong() {
     
  }

  render() {
    return (
    <div>
      <div className="library">  
      <h2>Library</h2>
        <div width='800' height='300'>
        <textarea width='800' height='300' id='library' value={this.record} />
        </div>
      </div>
      <div>
        <button type="button" onClick={this.clearSong}>Clear Song</button>
        <button type="button" onClick={this.saveSong}>Save Song</button>
        <button type="button" onClick={this.playSong}>Play Song</button>
      </div>
    </div>
    )
  }
}
window.Library = Library;
