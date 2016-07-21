

var Levels = React.createClass({
	getInitialState: function() {
		return {
			audioElms: [],
			container: null,
			ac: new window.AudioContext(),
			analyzer: null,
			levels: [],
			width: 200,
			height: 200
		}
	},

	updateLevels: function() {
		var data = new Float32Array(this.state.analyzer.frequencyBinCount);
		this.state.analyzer.getFloatFrequencyData(data);
		this.setState({levels : data});
	},

	componentDidMount: function() {
		// use jquery to populate audioElms with all audio html elements
		this.setState({
			audioElms: $('audio'),
			container: $('canvas'),
			analyzer: this.state.ac.createAnalyser()
		});
		var merge = this.state.ac.createChannelMerger(this.state.audioElms.length);
		this.state.audioElms.forEach(function(audio) {
			this.state.ac.createMediaElementSource(audio).connect(merge);
		});
		merge.connect(this.state.analyzer);
		this.state.analyzer.fftSize(24);
		setInterval(this.updateLevels, 500);
	}, 

	render: function() {
		return (
		// make it look pretty, use some canvas sheeeet
		<canvas width={this.state.width} height={this.state.height}>
		  The levels output is {this.levels}
		</canvas>

		)
	}



})