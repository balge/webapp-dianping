import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import ReactSwipe from 'react-swipe';
import './index.less';

class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
    }
    
    clickHandle(name){
        browserHistory.push('/search/' + encodeURIComponent(this.props.cityName) + '/' + encodeURIComponent(name));
    }

    render() {
    	const opt = {
            // auto: 2500,
            continuous: false,
            callback: function (index) {
                // 更新当前轮播图的index
                this.setState({index: index});
            }.bind(this)
        }
        return (
        	<div className="carousel">
        		<ReactSwipe swipeOptions={opt}>
	                {
	                	this.props.lists.lists.map((o,i) => (
	                		<div key={i} className="carousel-item">
	                			<ul className="clearfix">
	                				{
	                					o.list.map((v, k) => (
	                						<li onClick={this.clickHandle.bind(this, v.name)} key={k}>
	                							<img src={v.icon} alt="" />
	                							<p>{v.name}</p>
	                						</li>
	                					))
	                				}
	                			</ul>
	                		</div>
	                	))
	                }
	            </ReactSwipe>
	            <div className="index-container">
                    <ul className="clearfix">
                    {
                    	this.props.lists.lists.map((o,i) => (
                    		<li key={i} className={this.state.index === i ? "selected" : ''}></li>
                    	))
                    }
                    </ul>
                </div>
        	</div>
        );
    }
}

export default Category;
