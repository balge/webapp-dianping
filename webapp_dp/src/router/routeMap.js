import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../containers';
import Home from '../containers/Home';
import City from '../containers/City';
import Search from '../containers/Search';
import SearchResult from '../containers/SearchResult';
import Detail from '../containers/Detail';
import Map from '../components/Map';
import NotFound from '../containers/404'
import Login from '../containers/Login';
import User from '../containers/User';

class RouterMap extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path="login" component={Login} />
                    <Route path="user" component={User} />
                    <Route path='city/:id' component={City} />
                    <Route path='search' component={Search} />
                    <Route path='search/:city(/:keyword)' component={SearchResult} />
                    <Route path='detail/:id' component={Detail}/>
                    <Route path='map/:id' component={Map}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
		)
	}
}

export default RouterMap


