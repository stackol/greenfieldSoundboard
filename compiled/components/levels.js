'use strict';

var Levels = React.createClass({
	displayName: 'Levels',

	getInitialState: function getInitialState() {
		// var ac = new window.AudioContext();
		// var analyzer = ac.createAnalyser()
		// var elms = $('audio');
		// var merge = ac.createChannelMerger(elms.length);
		// for (var i = 0; i < elms.length; i++) {
		// 	ac.createMediaElementSource(elms[i]).connect(merge);
		// }
		// merge.connect(analyzer);
		// analyzer.fftSize = 32;
		// setInterval(this.updateLevels, 500);
		// console.log(elms);
		return {
			audioElms: null,
			container: null,
			ac: new window.AudioContext(),
			analyzer: null,
			// levels: null,
			width: 400,
			height: 200,
			instantiated: false
		};
	},

	startLevels: function startLevels() {
		if (!this.state.instantiated) {
			this.setState({
				audioElms: $('audio'),
				container: $('canvas')[0].getContext('2d'),
				analyzer: this.state.ac.createAnalyser(),
				instantiated: true
			}, this.checkLevels);
		}
	},

	checkLevels: function checkLevels() {
		var merge = this.state.ac.createChannelMerger(this.state.audioElms.length); //this.state.audioElms.length);
		for (var i = 0; i < this.state.audioElms.length; i++) {
			this.state.ac.createMediaElementSource(this.state.audioElms[i]).connect(merge);
		}
		merge.connect(this.state.analyzer);
		this.state.analyzer.connect(this.state.ac.destination);
		setInterval(this.updateLevels, 33);
	},

	updateLevels: function updateLevels() {
		var len = this.state.analyzer.frequencyBinCount;
		var data = new Uint8Array(len);
		this.state.analyzer.getByteFrequencyData(data);
		this.state.container.clearRect(0, 0, this.state.width, this.state.height);
		var width = this.state.width / len;

		for (var i = 0; i < data.length; i++) {
			var magnitude = data[i];
			this.state.container.fillRect(i * width, this.state.height, 1, -magnitude * .5);
		}
	},

	render: function render() {
		return (
			// make it look pretty, use some canvas sheeeet
			// <canvas width={this.state.width} height={this.state.height}>
			// </canvas>
			React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ onClick: this.startLevels },
					'Click to display levels'
				),
				React.createElement('canvas', { width: this.state.width, height: this.state.height })
			)
		);
	}
});

window.Levels = Levels;