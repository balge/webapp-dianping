import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class SearchKeyList extends Component {


    clickHandle(keyword){
       this.props.searchFn(keyword);
    }

    render() {
        return (
            	<div className="J_key_list key_list clearfix">
            		{
            			this.props.keylist.map((elem, index) => {
            				return (
            					<span onClick={this.clickHandle.bind(this, elem.name)} key={index}>{elem.name}</span>
            				);
            			})
            		}
            	</div>
        );
    }
}

export default SearchKeyList;
