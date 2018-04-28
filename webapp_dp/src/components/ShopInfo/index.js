import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class ShopInfo extends Component {

    render() {
        const infos = this.props.data;
        const url = `/map/${this.props.id}`;
        return (
        	<div>
                <div className="J_baseinfo">
                    <div className="shop-desc">
                        <h1 className="shop-name">{infos.name}</h1>
                        <p>
                            <span className={`star star-${infos.star}`}/>
                            <span className="num">{infos.num}条</span>
                            <span className="price">&yen;{infos.price}</span>
                            <span className="type">{infos.type}</span>
                        </p>
                    </div>
                    {
                        infos.imgs && infos.imgs.length > 0 ?
                        (
                            <div className="imgs">
                                <ul className="clearfix">
                                    {
                                       infos.imgs.map((elem, index) => {
                                           return (
                                                <li key={index}><img src={elem.img} alt="" /></li>
                                           );
                                       }) 
                                    }
                                </ul>
                            </div>
                        )
                        : ''
                    }
                    <div className="desc">
                        <span>口味:{infos.score_t}</span>
                        <span>环境:{infos.score_s}</span>
                        <span>服务:{infos.score_h}</span>    
                    </div>
                    <div className="address">
                        <Link to={url}>
                            <i className="icon-address" />
                            {infos.address}
                            <i className="arrowent" />
                        </Link>
                    </div>
                    <div className="tel">
                        <a href={`tel:${infos.tel}`}>
                            <i className="icon-tel" />
                            {infos.tel}
                            <i className="arrowent" />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default ShopInfo;
