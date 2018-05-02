import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BuyAndStore from '../../../components/BuyAndStore/';
import * as storeActionsFromFile from '../.././../actions/store';

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        store: state.store
    };
}

function mapDispatchToProps(dispatch){
    return {
        storeActions: bindActionCreators(storeActionsFromFile, dispatch)
    }
}


class Buy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStore: false
        }
    }

    componentDidMount() {
        this.checkStoreState();
    }
    //检查是否已经收藏
    checkStoreState(){
        const id = this.props.id;
        const store = this.props.store;
        store.some((v, k) => {
            if(v.id === id){
                this.setState({
                    isStore: true
                })
                return true;
            }
        });
    }

    handleStore(){
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }

        const id = this.props.id;
        const storeActions = this.props.storeActions;
        if(this.state.isStore){
            //已经收藏，点击取消
            storeActions.rm({id: id})
        } else{
            //收藏
            storeActions.add({id: id})
        }



        this.setState({
            isStore: !this.state.isStore
        })

    }

    handleBuy(){
        const loginFlag = this.loginCheck();
        if(!loginFlag){
            return
        }
        //购买流程省略
        console.log('购买流程省略，完成后跳转user页面')
        //跳转到页面
        browserHistory.push('/user');
    }

    loginCheck(){
        const userinfo = this.props.userinfo;
        if(!userinfo.userName){
            browserHistory.push('/login?redirect=' + encodeURIComponent(window.location.href));
            return false
        }
        return true
    }

    
    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore} handleStoreFn={this.handleStore.bind(this)} handleBuyFn={this.handleBuy.bind(this)} />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy);
