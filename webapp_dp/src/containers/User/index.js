import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import { USERNAME } from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';
import { browserHistory } from 'react-router';
import CommonHeader from '../../components/CommonHeader';
import UserInfo from '../../components/UserInfo/';
import OrderLists from './subpage/OrderList.js';

import Footer from '../../components/Footer';

import './index.less';

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}


class User extends Component {

    componentDidMount() {
        //没有用户信息，跳转到登录页面
        if(!this.props.userinfo.userName){
            browserHistory.push('/login?redirect=' + encodeURIComponent(window.location.href));
        }
    }

    handleLoginout(){

        let userinfo = this.props.userinfo;
        userinfo.userName = '';
        this.props.userInfoActions.update(userinfo)
        LocalStore.setItem(USERNAME, '');
        browserHistory.push('/');

    }

    render() {
        return (
            <div>
            	<CommonHeader title="用户中心" />
                <UserInfo LoginoutFn={this.handleLoginout.bind(this)} name={this.props.userinfo.userName} city={this.props.userinfo.userCity} />
                <OrderLists name={this.props.userinfo.userName} />
                <Footer />
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
