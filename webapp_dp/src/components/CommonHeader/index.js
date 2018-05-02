import React, { Component } from 'react';
import './index.less';

class CommonHeader extends Component {

    back(){
        window.history.back();
    }
    render() {
        return (
            <div>
            	<div className="common-head">
                    <div onClick={this.back.bind(this)}><span className="back" /></div>
                    <div className="head-tit"><span>{this.props.title}</span></div>
                </div>
            </div>
        );
    }
}

export default CommonHeader;
