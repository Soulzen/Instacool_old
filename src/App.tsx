import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router';

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import NewsFeed from './containers/NewsFeed';
import Navbar from './components/Navbar';

class App extends Component {
	public render() {
		return (
			<div>
				<Route exact={true} path="/" component={Login} />
				<Route exact={true} path="/register" component={Register} />
				<Route path="/app" component={Navbar} />
				<Route exact={true} path="/app/newsfeed" component={NewsFeed} />
			</div>
		);
	}
}

export default App;
