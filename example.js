var resources = require('./resources');

var Data1Button = React.createClass({displayName: 'Data1Button',
	add: function(){
		emitter.emit('add');
	},
	render: function(){
		return React.createElement('button', {onClick:this.add}, 'Add')
	}
});

var Output = React.createClass({displayName: 'Output',
	getInitialState:function(){
		
	},
	componentDidMount: function(){
		
	},
	render: function(){
		return React.createElement('div', null, 'Output: ' + this.state.added)
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