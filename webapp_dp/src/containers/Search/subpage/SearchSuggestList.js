import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

class SearchSuggestList extends Component {

    clickHandle(keyword){
        this.props.searchFn(keyword);
    }
    
    render() {
        return (
        	<div className="J_suggest_list suggest_list clearfix">
                <ul>
                {
                    this.props.suggestlist.map((elem, index) => {
                        return (
                            <li onClick={this.clickHandle.bind(this, elem.name)} key={index}>{elem.name}<span className="number">约{elem.num}个结果</span></li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default SearchSuggestList;
