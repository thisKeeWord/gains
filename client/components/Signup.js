import React from 'react';
import { Link } from 'react-router';

class Signup extends React.Component {
  render() {
    return (
    	<div className="signup">
        <form onSubmit={this.signup.bind(this)}>
          <input name="username" placeholder="username"></input>
          <input name="password" placeholder="password"></input>
          <input type='submit' value="signup" />
        </form>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
    )
  }
};

module.exports = Signup;