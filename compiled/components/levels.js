'use strict';

var Levels = React.createClass({
	displayName: 'Levels',

	getInitialState: function getInitialState() {
		return {
			audioElms: null,
			container: null,
			ac: new window.AudioContext(),
			analyzer: null,
			// levels: null,
			width: 800,
			height: 300,
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
		this.state.analyzer.fftSize = 2048;
		setInterval(this.updateLevels, 33);
	},

	updateLevels: function updateLevels() {
		var len = this.state.analyzer.frequencyBinCount;
		var data = new Uint8Array(len);
		this.state.analyzer.getByteFrequencyData(data);
		this.state.container.clearRect(0, 0, this.state.width, this.state.height);
		var width = this.state.width / len;
		var coefficient = 255 / len;
		var gradient = this.state.container.createLinearGradient(0, 0, this.state.width, 0);
		gradient.addColorStop(0, "#DB36A4");
		gradient.addColorStop(1, "#F7FF00");

		for (var i = 0; i < data.length; i++) {
			var magnitude = data[i] / 128.0;
			this.state.container.fillStyle = gradient;
			this.state.container.fillRect(i * width, this.state.height - magnitude * .5 * this.state.height, 1, this.state.height);
		}
	},

	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'div',
				{ className: 'levels' },
				React.createElement('canvas', { width: this.state.width, height: this.state.height })
			),
			React.createElement(
				'div',
				null,
				React.createElement(
					'button',
					{ type: 'button', onClick: this.startLevels },
					'Click to display levels'
				)
			)
		);
	}
});

window.Levels = Levels;