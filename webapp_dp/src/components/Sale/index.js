import React, { Component } from 'react';
import './index.less';

class Sale extends Component {

    render() {
        return (
        	<div className="J_sales">
                <div className="sale-box">
                    <div className="title">
                        <a href="https://m.dianping.com/search/deallist/promo?cityid=288&topic=preferential&lat=0&lng=0&from=m_discount">
                            <span className="title_left" />
                            <span className="more">更多优惠</span>
                            <i className="arrowent" />
                        </a>
                    </div>
                    <div className="sale-content">
                        <ul className="clearfix">
                            {
                                this.props.data.map((elem, index) => {
                                    return (
                                        <li key={index} className="item-li"><a href={elem.link}>
                                            <div className="pic"><img src={elem.pic} alt={elem.title} /></div>
                                            <div className="info">
                                                <p className="name">{elem.title}</p>
                                                <p className="price">
                                                    <span className="acp"><i>&yen;</i>{elem.acp}</span>
                                                    <span className="orp">&yen;{elem.orp}</span>
                                                </p>
                                            </div>
                                        </a></li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sale;
