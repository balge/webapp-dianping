import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './index.less';

class GuessLike extends Component {
    

    goDetail(id){
        browserHistory.push('/detail/' + id);
    }

    render() {
        return (
            <div className="listsearch-box">
                <ul className="clearfix">
                {
                    this.props.data.map((elem, index) => {
                        return (
                            <li key={index} className="item-li" onClick={this.goDetail.bind(this, elem.id)}>
                                <div className="pic"><img src={elem.pic} alt={elem.title} /></div>
                                <div className="info">
                                    <p className="shop-name">{elem.title}</p>
                                    <p className="shop-desc">{elem.subTitle}</p>
                                    <div className="item-price">
                                        <p className="price">
                                            <span className="acp"><i>&yen;</i>{elem.acp}</span>
                                            <span className="orp">&yen;{elem.orp}</span>
                                        </p>
                                        <p className="sale-num">已售{elem.sale}</p>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default GuessLike;
