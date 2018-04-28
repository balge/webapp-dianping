import React, { Component } from 'react';
import './index.less';

class Footer extends Component {

    render() {
        return (
        	<div className="J_footer">
                <a href="//m.dianping.com/nmy/myinfo" title="">我的</a><em className="wide_sep">|</em>
                <a href="//m.dianping.com/forum" title="">社区论坛</a><em className="wide_sep">|</em>
                <a href="//evt.dianping.com/synthesislink/6513.html">添加商户</a><em className="wide_sep">|</em>
                <a href="//evt.dianping.com/synthesislink/10120.html" title="">意见反馈</a>
                <br />
                <a href="//i.meituan.com" title="">美团网</a><em className="narrow_sep">|</em>
                <a href="//i.meituan.com/client/meituan" title="">美团下载</a><em className="narrow_sep">|</em>
                <a href="//m.dianping.com/wed/mobile/wedding/index" title="">结婚</a><em className="narrow_sep">|</em>
                <a href="/baby/mobile/index">亲子</a><em className="narrow_sep">|</em>
                <a href="//m.dianping.com/wed/mobile/home/index" title="">家装</a><em className="narrow_sep">|</em>
                <a href="//m.dianping.com/shoplist/1/c/165" title="">宴会</a><em className="narrow_sep">|</em>
                <a href="//h5.dianping.com/platform/vc-education/index.html" title="">教育</a>
                <br />
                <a id="j-computer" href="//www.dianping.com" title="">电脑版</a><em className="wide_sep">|</em>
                <a id="F_download" href="http://www.dianping.com/events/m/index.htm" title="">客户端</a>
                <br />
                <p className="copyright">copyright ©2018 dianping.com</p>
            </div>
        );
    }
}

export default Footer;
