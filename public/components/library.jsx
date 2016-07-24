
class Library extends React.Component{
   constructor(props) {
    super(props)
    this.state = {
      record:props.recordNames,
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
  ///soundfiles/beads.wav,
 
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
       </div>
    </div>
    )
  }
}
window.Library = Library;
