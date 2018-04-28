import React, { Component } from 'react';
import './index.less';

class Redbag extends Component {

    render() {
        return (
        	<div className="redbag-box">
                <div className="bord" />
                <div className="redbag">
                    <div className="redbag-inner">
                        <a href="https://h5.dianping.com/app/ziggurat/1005/index.html?activity_tlt=1005&infrom=mzone">
                            <div className="title">88元红包</div>
                            <div className="sub">新人见面礼</div>
                            <img src="https://gw.alicdn.com/tfs/TB1NFxenWmWBuNjy1XaXXXCbXXa-120-120.png" alt="" />
                        </a>
                    </div>
                </div>
                <div className="bord" />
            </div>
        );
    }
}

export default Redbag;
