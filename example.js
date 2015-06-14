var intent = require('./song-intent');
var model = require('./song-model');
var React = require('react');

var Data1Button = React.createClass({displayName: 'Data1Button',
	add: function(){
		intent.set('/counter/', 1);
	},
	render: function(){
		return React.createElement('button', {onClick:this.add}, 'Add')
	}
});

var Output = React.createClass({displayName: 'Output',
	getInitialState:function(){
		return {count:0};
	},
	componentDidMount: function(){
		var component = this;
		model.subscribe(function(x){
			component.setState({count:x.count});
		})
	},
	render: function(){
		return React.createElement('div', null, 'Output: ' + this.state.count)
	}
});

var CountContainer = React.createClass({displayName: 'CountContainer',
	render: function(){
		return React.createElement('div', null,
			React.createElement(Output, null),
			React.createElement(Data1Button, null)
		)
	}
});

React.render(
	React.createElement(CountContainer, null),

		document.getElementById('content')
);