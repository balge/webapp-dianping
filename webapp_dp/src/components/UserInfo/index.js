import React, { Component } from 'react';
import { Link } from 'react-router';
import './index.less';

class UserInfo extends Component {

    HandleLoginout(){
        this.props.LoginoutFn();
    }

    render() {
        return (
        	<div className="userinfo-topbar">
                <p>{this.props.name}，您好</p>
                <div onClick={this.HandleLoginout.bind(this)} className="loginout">退出登录</div>
            </div>
        );
    }
}

export default UserInfo;
