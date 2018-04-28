import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { browserHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import { USERNAME } from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';

import CommonHeader from '../../components/CommonHeader';
import LoginComponent from '../../components/Login';

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


class LoginParent extends Component {

	constructor(props) {
		super(props);
		this.state = {
            checking: true
        }
	}

	componentDidMount() {
        // 判断是否已经登录
        this.doCheck();
    }

    doCheck() {
        const userinfo = this.props.userinfo
        if (userinfo.userName) {
            // 已经登录，则跳转到用户主页
            this.goUserPage();
        } else {
            // 未登录，则验证结束
            this.setState({
                checking: false
            })
        }
    }

    // 处理登录之后的事情
    loginHandle(username) {
        // 保存用户名
        const actions = this.props.userInfoActions;
        let userinfo = this.props.userinfo;
        userinfo.userName = username;
        actions.update(userinfo);
        const redirect = this.props.location.query.redirect;
        //修改localstoreage
        LocalStore.setItem(USERNAME, username);

        if (redirect) {
            // 跳转到指定的页面
            window.location.href = redirect;
        } else {
            // 跳转到用户主页
            this.goUserPage();
        }
    }

    goUserPage() {
        browserHistory.push('/user')
    }

    render() {
        return (
            <div>
            	<CommonHeader title="手机快捷登录" />
            	{
                    // 等待验证之后，再显示登录信息
                    this.state.checking
                    ? <div>{/* 等待中 */}</div>
                    : <LoginComponent loginHandle={this.loginHandle.bind(this)}/>
                }
            </div>
        );
    }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginParent);
