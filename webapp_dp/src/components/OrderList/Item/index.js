import React, { Component } from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            commentState: 2  // commentState  0-未评价 1-评价中 2-已评价
        }
    }
    componentDidMount() {
        // 将状态维护到 state 中
        this.setState({
            commentState: this.props.data.state
        })
    }
    showComment() {
        // 显示输入框
        this.setState({
            commentState: 1
        })
    }
    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const commentText = this.refs.commentText;
        const value = commentText.value.trim();
        if (!value) {
            return
        }
        submitComment(id, value, this.commentOk.bind(this))

    }
    commentOk() {
        // 已经评价，修改状态
        this.setState({
            commentState: 2
        })
    }
    hideComment() {
        // 隐藏输入框
        this.setState({
            commentState: 0
        })
    }

    render() {
        const data = this.props.data;
        return (
            <div className="order-item-container">
                <div className="clearfix order-item">
                    <div className="order-item-img float-left">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                            ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                            :
                                this.state.commentState === 2
                                ? <button className="btn unseleted-btn">已评价</button>
                                : ''
                        }
                    </div>
                </div>
                {
                    this.state.commentState === 1
                    ? <div className="comment-text-container">
                        <textarea style={{width: '100%', height: '80px'}} className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                        &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                    </div>
                    : ''
                }
            </div>
        )
    }
}

export default Item
