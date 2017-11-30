import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Video from './containers/Video';
import VideoList from './containers/VideoList';
import VideoForm from './containers/VideoForm';
import thunk from 'redux-thunk';
import reducer from './reducers'

const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

ReactDOM.render((
	// <VideoForm />
	// <VideoList />
		<Provider store = { store }>
			<Video />
		</Provider>
	), document.getElementById('app')
);
