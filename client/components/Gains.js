import React from 'react';
import Login from './Login';

class Gains extends React.Component {
	constructor() {
		super();
		this.state = {
			userLoggedIn: false
		};
	}

	login(e) {
		this.setState({
			userLoggedIn: true
		});
	}

  render() {
    return (
    	<Login userLoggedIn={this.state.userLoggedIn} />
    )
  }
};

module.exports = Gains;


