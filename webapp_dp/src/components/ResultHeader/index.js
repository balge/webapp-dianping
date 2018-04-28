import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class ResulrHeader extends Component {

    render() {
        return (
            <div>
            	<div className="list-head">
                    <Link to="/"><span className="back" /></Link>
                    <div className="head-tit"><span>{`${this.props.cityName}商户`}</span></div>
                    <Link to="/search"><span className="newsearch J_search_trigger" /></Link>
                </div>
                <div className="keyword_frame">
                    <Link to="/search"><div className="J_search_trigger search_keyword">{this.props.keyword}</div></Link>
                </div>
            </div>
        );
    }
}

export default ResulrHeader;
