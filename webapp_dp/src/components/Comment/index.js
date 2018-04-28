import React, { Component } from 'react';
import './index.less';

class Comment extends Component {

    constructor(props){
        super(props);
        this.state={
            showmore: true
        }
    }

    handleMore(){
        this.props.moreFn();
        this.setState({
            showmore: false
        })
    }

    // handleViewPic(picUrl){
    //     this.setState({
    //         picUrl: picUrl
    //     })
    // }

    render() {
        return (
            <div className="J_comment">
                <h3 className="title-item">网友点评</h3>
                <div className="comment-list">
                {
                    this.props.data.map((elem, index) => {
                        return (
                            <div key={index} className="singleUser">
                                <div className="user-pic">
                                    <img src={elem.user_header} alt="" />
                                </div>
                                <div className="comment">
                                    <div className="username">{elem.user_name}</div>
                                    <div className="info"><span className={`star star-${elem.star}`} /><span className="avg-price">    人均:{elem.price}</span></div>
                                    <div className="comment-entry">
                                        {elem.text}
                                    </div>
                                    {
                                        elem.imgs&&elem.imgs.length > 0 ?
                                        (<div className="imgs">
                                            <ul className="clearfix">
                                            {
                                                elem.imgs.map((v, k) => {
                                                    return (
                                                        <li key={k}><img src={v.img} alt="" /></li>
                                                    );
                                                })
                                            }
                                            </ul>
                                        </div>)
                                        : ''
                                    }
                                    <div className="comment-info">浏览{elem.view}</div>
                                </div>
                            </div>
                        );
                    })
                }
                </div>
                {
                    this.state.showmore === true ? (<div className="load-more" onClick={this.handleMore.bind(this)}>查看更多</div>) : ''
                }
            </div>
        )
    }
}

export default Comment;
