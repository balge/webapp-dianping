import React, { Component } from 'react';
import './index.less';

class GuessLike extends Component {
    
    render() {
        return (

            <div className="guesslike-box">
                <ul className="clearfix">
                {
                    this.props.data.map((elem, index) => {
                        return (
                            <li key={index} className="item-li"><a href={elem.link}>
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
                            </a></li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default GuessLike;
