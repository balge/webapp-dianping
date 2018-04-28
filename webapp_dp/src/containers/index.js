import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CITYNAME, USERNAME } from '../config/localStoreKey';
import LocalStore from '../util/localStore';
import * as userInfoActionsFromOtherFile from '../actions/userinfo';

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            initDone: false
        }
    }

    componentDidMount() {

        let cityName = LocalStore.getItem(CITYNAME)
        let userName = LocalStore.getItem(USERNAME) || ''
        if (cityName == null) {
            cityName = '杭州'
        }
        this.props.userInfoActions.update({
            cityName: cityName,
            userName: userName
        })

        // 更改状态
        this.setState({
            initDone: true
        })
    }

    
    render() {
        return (
            <div>
            {
                this.state.initDone ? 
            	this.props.children
                : <div className="loading" style={{textAlign: 'center',padding: '20px'}}>加载中...</div>
            }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
