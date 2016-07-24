
class Library extends React.Component{
   constructor(props) {
    super(props)
    this.state = {
      recordNames:props.recordNames,
      record:props.recording,
      clearSong:props.clearRecord,
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
    this.props.clearRecord()
  }

  playSong() {
    for (var i=0;i<this.props.recording.length;i++){
      this.props.recording[i].play()
    }
  }

  saveSong() {
    var that = this;
    var title = this.state.title.toString()
    var recording = this.props.recording.toString()
    console.log('savesong',recording)
     $.ajax({
      type: "POST",
      url: "/saveSong",
      processData: false,
      contentType: "application/json",
      data: JSON.stringify({
        title:  title,
        record: recording
      }),
      success: function(){
        console.log("success");
          that.props.clearRecord()
      },
      error: function(err){
        console.error(err);
      }
    });
  }
 
shouldComponentUpdate(nextProps, nextState) {
  return this.props.recordNames !== nextProps.recordNames;
 }

  render() {
     return (
    <div>    
      <h2 style={{color:'white'}}>Record</h2>     
        <div className='library' id='library'>{ this.props.recordNames}</div>
      <div>
         <button type="button" onClick={this.playSong.bind(this)}>Play Song</button>
         <button type="button" onClick={this.saveSong.bind(this)}>Save Song</button>
         <button type="button" onClick={this.clearSong.bind(this)}>Clear Song</button>
       </div>
    </div>
    )
  }
}
window.Library = Library;
