import React, { Component } from 'react';
import './index.less';

class DownloadBanner extends Component {

    render() {
        return (
        	<div className="J_download-guide">
                <div className="download-guide border-bottom-new">
                    <div className="title">
                        <i className="icon" />
                        <span className="text">吃喝玩乐，找优惠</span>
                    </div>
                    <div className="btns">
                        <a className="btn-openapp" href="https://link.dianping.com/universal-link?originalUrl=http%3A%2F%2Fevt.dianping.com%2Fsynthesislink%2F6702.html&schema=dianping%3A%2F%2Fweb%3Furl%3Dhttps%253A%252F%252Fh5.dianping.com%252Fapp%252Fop-task%252Fmobile%252Fevent%252Findex_v3.html%253Futm_source%253Dmcnxh">打开大众点评</a>
                        <a className="btn-downloadapp" href="https://m.dianping.com/download/redirect?id=11186">下载APP享特价</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadBanner;
