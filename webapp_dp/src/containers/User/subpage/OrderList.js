import React, { Component } from 'react';
import { getOrderListData } from '../../../fetch/user/orderlist';
import Item from '../../../components/OrderList/index';

class OrderLists extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // 获取订单数据
        const username = this.props.name
        if (username) {
            this.loadOrderList(username)
        }
    }
    loadOrderList(username) {
        const result = getOrderListData(username)
        result.then(res => {
            return res.json()
        }).then(json => {
            // 获取数据
            this.setState({
                data: json
            })
        }).catch(ex => {
            console.error('用户主页“订单列表”获取数据报错, ', ex.message)
        })
    }

    render() {

            console.log(this.state)
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                    ? <Item data={this.state.data} />
                    : <div className="load-wrap">
                        <div className="loading-img"></div>
                        <span>正在加载...</span>
                    </div>
                }
            </div>
        );
    }
}

export default OrderLists;
