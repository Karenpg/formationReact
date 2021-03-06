import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducer from '../reducers';
import { routerMiddleware } from 'react-router-redux';
// import { browserHistory } from 'react-router';

export default function configureStore() {

	// On récupère la fonction composeEnhancers de l'extension
	// chrome si elle existe sinon on utiliser la fonction
	// compose de redux
	const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

	const logger = createLogger();
	const store = createStore(
	  reducer,
	  // On enrobe le applyMiddleware avec
	  // le composeEnhancers de redux-devtools
	  composeEnhancers(
	    applyMiddleware(t
				hunk, logger, routerMiddleware( browserHistory ))
	  )
	);
	return store;
}
