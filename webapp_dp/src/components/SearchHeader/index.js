import React, { Component } from 'react';
import './index.less';
class SearchHeader extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
    }

    componentDidMount() {
        this.setState({
            value: this.props.value || ''
        })
        if(this.props.value !== null && this.props.value !== ''){
            this.props.searchRenderFn(this.props.value)
        }
    }

    ChangeHandle(e) {
        // 监控变化
        this.props.searchRenderFn(e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    KeyUpHandle(e) {
        // 监控 enter 事件
        if (e.keyCode !== 13) {
            return
        }
        this.props.searchFn(this.node.value)
        this.setState({
            value: ''
        })
    }

    clearHandle(e){
        //清空输入框
        console.log('清空了关键字')
        this.setState({
            value: ''
        })
        this.props.searchFn(null);
        this.props.searchRenderFn(null);
    }

    backHandle(e){
        this.props.changeFn(this.node.value);
    }

    render() {
        return (
        	<div className="head_cnt">
                <div className="head_cnt_input">
                    <input type="text" ref={node => this.node = node} name="keyword" className="J_search_input" autoComplete="off" placeholder="输入商户名、地点"
                        onKeyUp={this.KeyUpHandle.bind(this)}
                        onChange={this.ChangeHandle.bind(this)}
                        value={this.state.value}/>
                    {this.state.value === '' ? '' : (<i onClick={this.clearHandle.bind(this)} className="clear"><span className="clearSpot" /></i>)}
                </div>
                <div onClick={this.backHandle.bind(this)} className="cancel J_cancel">取消</div>
            </div>
        );
    }
}

export default SearchHeader;
