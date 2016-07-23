

class Library extends React.Component({
   constructor(props) {
    super(props);
    this.state = {
      width: 800,
      height: 300,
    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  

  clearSong: function() {
     
  }, 

  playSong: function() {
  },

  saveSong: function() {

  },

  render: function() {
    return (
    <div>
      <div className="library", id='library'>  
        <div width={this.state.width} height={this.state.height}></div>
      </div>
      <textarea id='title' val='Title'/>
      <div>
        <button type="button" onClick={this.clearSong}>Clear Song</button>
        <button type="button" onClick={this.saveSong}>Save Song</button>
        <button type="button" onClick={this.playSong}>Play Song</button>
      </div>
    </div>
    )
  }
})

window.Levels = Levels;
