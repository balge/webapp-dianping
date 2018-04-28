import React, { Component } from 'react';
import './index.less';

class OrderList extends Component {

    render() {
        const data = this.props.data;
        console.log(data)
        return (
            <div className="order-item-container">
                {
                    data.map((v, k) => {
                        return(
                            <div key={k} className="clearfix order-item">
                                <div className="order-item-img float-left">
                                    <img src={v.img}/>
                                </div>
                                <div className="order-item-comment float-right">
                                    <button>评价</button>
                                </div>
                                <div className="order-item-content">
                                    <span>商户：{v.title}</span>
                                    <span>数量：{v.count}</span>
                                    <span>价格：￥{v.price}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default OrderList;
