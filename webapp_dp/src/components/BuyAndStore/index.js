import React, { Component } from 'react';
import './index.less';

class BuyAndStore extends Component {

	handleBuy(){
		this.props.handleBuyFn();
	}

	handleStore(){
		this.props.handleStoreFn();
	}


    render() {
    	const cls = this.props.isStore===true ? `iconfont icon-shoucang2` : `iconfont icon-shoucang1`
        return (
        	<div className="clearfix btn-wraps">
                <div className="btn-store" onClick={this.handleStore.bind(this)}><span className={cls} />{this.props.isStore===true ? '取消收藏':'收藏'}</div>
                <div className="btn-buy" onClick={this.handleBuy.bind(this)}><span className="iconfont icon-buycar" />购买</div>
            </div>
        );
    }
}

export default BuyAndStore;
