import React, { Component } from 'react';
import './index.less';

class DetailHeader extends Component {

    goBack(){
        window.history.back()
    }

    render() {
        return (
            <div className="shop-head">
                <div className="back" onClick={this.goBack.bind(this)} />
                <div className="title">商户详情</div>
            </div>
        );
    }
}

export default DetailHeader;
