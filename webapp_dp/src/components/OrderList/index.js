import React, { Component } from 'react';
import Item from './Item';
import './index.less';

class OrderList extends Component {
    render() {
        const data = this.props.data;
        const submitComment = this.props.submitComment;

        return (
            <div className="order-item-container">
                {
                    data.map((v, k) => {
                        return <Item key={k} data={v} submitComment={submitComment} />
                    })
                }
            </div>
        );
    }
}

export default OrderList;
