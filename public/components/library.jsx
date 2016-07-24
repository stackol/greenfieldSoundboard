
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
    console.log('clearsong')
    this.state.record = []
    this.state.recordNames=[]
  }

  playSong() {
    console.log('playsong')
    for (var i=0;i<this.props.recording.length;i++){
      this.props.recording[i].play()
    }
  }

  saveSong() {
    console.log('savesong')
    var title = this.state.title
    var recording = this.props.recording
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
      },
      error: function(err){
        console.error(err);
      }
    });
  }
 
shouldComponentUpdate(nextProps, nextState) {
  console.log('names',this.props.recordNames)
  
   //var a = this.props.recordNames.lastIndexOf('/')
  // this.props.recordNames.slice(this.props.recordNames.lastIndexOf('/'))
  return this.props.recordNames !== nextProps.recordNames;
 }

  render() {
     return (
    <div>    
      <h2 style={{color:'white'}}>Record</h2>     
        <div className='library' id='library'>{ this.props.recordNames}</div>
      <div>
         <button type="button" onClick={this.playSong.bind(this)}>Play Song</button>
       </div>
    </div>
    )
  }
}
window.Library = Library;
