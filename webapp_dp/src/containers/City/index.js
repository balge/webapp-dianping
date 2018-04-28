import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CityHeader from '../../components/CityHeader';
import CityFooter from '../../components/Footer';
import CityHome from '../../components/CityList/CityHome';
import CityIntl from '../../components/CityList/CityIntl';
import { browserHistory } from 'react-router';
import * as userInfoActionsFromOtherFile from '../../actions/userinfo';
import { CITYNAME } from '../../config/localStoreKey';
import LocalStore from '../../util/localStore';

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

class City extends React.Component {

	changeCity(newCity) {

		if(newCity == null){
			return
		}

		// console.log(this.props)

		// 修改redux
		const userinfo = this.props.userinfo;
		userinfo.cityName = newCity;
		this.props.userInfoActions.update(userinfo);

		//修改localstoreage
		LocalStore.setItem(CITYNAME, newCity);

		//跳转首页
		browserHistory.push('/');
		
	}

	componentDidMount() {
	    this.node.scrollIntoView();//路由切换后回到顶部
	}

	render() {
		return (
			<div ref={node => this.node = node}>
				<CityHeader />
				{
					this.props.params.id === 0 || this.props.params.id === '0' ?
					<CityHome changeFn={this.changeCity.bind(this)} /> : <CityIntl />
				}
				<CityFooter />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(City)
