import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Gains from './Gains';
import Login from './Login';
import Signup from './Signup';
        // <Route path="/about" component={About} />

class App extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Gains} />
        	<Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
