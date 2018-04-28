import React, { Component } from 'react';
import './index.less';

class Article extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }

    componentDidMount() {
        let length = this.props.data.length;
        let i = 0;
        this.timer = setInterval(() =>
        {
            i++;
            if(i < length){
                this.setState({
                    index: i
                })
            }else{
               i = 0;
               this.setState({
                    index: i
                }) 
            }
        }
        ,2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        let listCls = this.state.index === 0 ? `clearfix lists move${this.state.index}` : `clearfix lists listTranstion move${this.state.index}`;
        return (
        	<div className="J_article">
                <div className="hTitle" />
                <ul className={listCls}>
                {
                    this.props.data.map((elem, index) => {
                        return (
                            <li key={index}>
                                <a href={elem.link} className="commonItem">
                                    <div className="mTitle">
                                        <span>{elem.title}</span>
                                    </div>
                                    <div className="rightPic">
                                        <img width="45" src={elem.img} alt="" />
                                        <div className="imgNum">{elem.num}</div>
                                        <div className="rightPicShadow"></div>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        );
    }
}

export default Article;
