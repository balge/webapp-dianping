import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import './index.less';

class HomeHeader extends Component {

    enterHandle(value) {
        browserHistory.push('/search/all/' + encodeURIComponent(value))
    }

    render() {
        return (
        	<div className="J_header">
                <div className="header">
                    <Link to="/city/0">
                        <span className="city">{this.props.cityName}</span>
                    </Link>
                    <div className="search J_search_trigger"><Link to="/search">输入商户名、地点</Link></div>
                    <Link to='/user' className="self">
                        <div className="selfOutline" />
                    </Link>
                </div>
                <div className="header_fill" />
            </div>
        );
    }
}

export default HomeHeader;
