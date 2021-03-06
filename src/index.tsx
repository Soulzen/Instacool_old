import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createHistory from 'history/createBrowserHistory';
import * as serviceWorker from './serviceWorker';

import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as reducers from './ducks';
import services from './services';

const history = createHistory();
const store = createStore(
	combineReducers({
		...reducers
	}),
	applyMiddleware(thunk.withExtraArgument(services))
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
