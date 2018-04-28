import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {  HISTORYIPT, HISTORYKEY} from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';

import SearchHeader from '../../components/SearchHeader';
import SearchKeyList from './subpage/SearchKeyList';
import SearchHistoryList from './subpage/SearchHistoryList';
import SearchSuggestList from './subpage/SearchSuggestList';

import { getSearchKeyList, getSuggestList } from '../../fetch/search/search';

import './index.less';

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

class Search extends React.Component {

	constructor(props){
		super(props);
		this.state = {
			keyList: [],
			suggestList: [],
			historykey: LocalStore.getItem(HISTORYKEY),
			historyipt: LocalStore.getItem(HISTORYIPT),
		}
	}

	componentDidMount() {

	    this.node.scrollIntoView();//路由切换后回到顶部
	    console.log('搜索页面：' + this.props.userinfo.cityName + '的快捷搜索关键字')
	    const result = getSearchKeyList(this.props.userinfo.cityName);
	    result.then(res => {
	    	return res.json()
	    }).then(json => {
	    	if(json) {
	    		this.setState({
	    			keyList: json
	    		})
	    	}
	    })
	}


	renderSearchList(keyword){
		if(keyword !== null && keyword !== ''){
			console.log('搜索页面：' + keyword + '的关键字联想')
		    const result = getSuggestList(keyword);
		    result.then(res => {
		    	return res.json()
		    }).then(json => {
		    	if(json && json.length > 0) {
		    		this.setState({
		    			suggestList: json
		    		})
		    	}else{
		    		this.setState({
		    			suggestList: []
		    		})
		    	}
		    })
		}else{
			this.setState({
    			suggestList: []
    		})
		}
	}

	changeHistoryIpt(newKey){
		if(newKey == null){
			return
		}
		//修改localstoreage
		LocalStore.setItem(HISTORYIPT, newKey);
		//跳转首页
		browserHistory.push('/');

	}


	handleGoSearch(newKey){
		if(newKey == null || newKey === ''){
			return
		}
		let historylist = LocalStore.getItem(HISTORYKEY) || '[]';
		historylist = JSON.parse(historylist);
		if(historylist.indexOf(newKey) !== -1){
			LocalStore.setItem(HISTORYIPT, '');//清空输入框store，避免再次搜索直接渲染之前的结果，只有取消搜索才会记录该数值
        	browserHistory.push('/search/' + encodeURIComponent(this.props.userinfo.cityName) + '/' + encodeURIComponent(newKey));
			return
		}
		historylist.push(newKey);
		LocalStore.setItem(HISTORYKEY, JSON.stringify(historylist));//存储记录
		LocalStore.setItem(HISTORYIPT, '');//清空输入框store，避免再次搜索直接渲染之前的结果，只有取消搜索才会记录该数值
        browserHistory.push('/search/' + encodeURIComponent(this.props.userinfo.cityName) + '/' + encodeURIComponent(newKey));
	}

	clearHandle(){
        LocalStore.setItem(HISTORYKEY, '');
        this.setState({
        	historykey: ''
        })
	}

	render() {
		console.log()
		//输入关键字，显示suggest,记录关键字
		//显示，清除搜索记录
		//清除key
		//本地存储查询记录
		return (
			<div className="J_search_container search_container" ref={node => this.node = node}>
				<SearchHeader value={this.state.historyipt} searchFn={this.handleGoSearch.bind(this)} searchRenderFn={this.renderSearchList.bind(this)} changeFn={this.changeHistoryIpt.bind(this)} />
            	<div className="J_key_wrapper">
					<SearchKeyList searchFn={this.handleGoSearch.bind(this)} keylist={this.state.keyList} />
					{
						this.state.historykey == null ? '' : (<SearchHistoryList searchFn={this.handleGoSearch.bind(this)} clearFn={this.clearHandle.bind(this)} keylist={this.state.historykey} />)
					}
					{this.state.suggestList.length > 0 ? (<SearchSuggestList searchFn={this.handleGoSearch.bind(this)} suggestlist={this.state.suggestList}/>) : ''}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(Search)
