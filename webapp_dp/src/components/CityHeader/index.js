import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class CityHeader extends Component {

    render() {
        return (
        	<div className="J_cityheader">
        		<Link to="/"><span className="back" /></Link>
                <div className="list-type">
                	<Link activeClassName="on" to="/city/0">
                		<span>国内</span>
                	</Link>
                	<Link activeClassName="on" to="/city/1">
                		<span>国际/港澳台</span>
                	</Link>
                </div>
            </div>
        );
    }
}

export default CityHeader;
