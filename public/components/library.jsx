
class Library extends React.Component{
   constructor(props) {
    super(props)
    this.state = {
      record:props.recording,
      library:[],
      title:""
    }
   }
  
  getSonglibrary() {
     $.ajax({
      type: "GET",
      url: "/getSonglibrary",
      processData: false,
      contentType: "application/json"
      ,
      success: function(data){
        console.log("success", data);
        return(data);
      },
      error: function(err){
        console.error(err);
      }
    });
  }

  clearSong() {
     //this.clearRecord()
  }

  playSong() {
    for (var i=0;i<this.props.recording.length;i++){
      this.props.recording[i].play()
    }
  }

  saveSong() {
     $.ajax({
      type: "POST",
      url: "/saveSong",
      processData: false,
      contentType: "application/json",
      data: JSON.stringify({
        title:  this.state.title,
        record: this.props.recording
      }),
      success: function(){
        console.log("success");
      },
      error: function(err){
        console.error(err);
      }
    });
  }
shouldComponentUpdate(nextProps, nextState) {
  return this.props.recording !== nextProps.recording;
 }

  render() {
    return (
    <div>    
      <h2 style={{color:'white'}}>Library</h2>     
        <div className='library' id='library'>{this.props.recording.toString()}</div>
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
