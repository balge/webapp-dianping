import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class LoginHeader extends Component {

    render() {
        return (
            <div>
            	<div className="common-head">
                    <Link to="/"><span className="back" /></Link>
                    <div className="head-tit"><span>{this.props.title}</span></div>
                </div>
            </div>
        );
    }
}

export default LoginHeader;
