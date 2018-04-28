import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RouteMap from './router/routeMap';
import configureStore from './store/configureStore';
import './index.less';

const store = configureStore();


ReactDOM.render(
	<Provider store={store}>
        <RouteMap />
    </Provider>,
	document.getElementById('root')
);
