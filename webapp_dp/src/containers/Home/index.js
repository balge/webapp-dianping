import React from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import categoryData from '../../components/Category/CategoryData';
import DownloadBanner from '../../components/DownloadBanner';
import Articles from './subpage/Articles'
import Redbag from '../../components/Redbag';
import Sales from './subpage/Sales';
import GuessLikes from './subpage/GuessLikes';
import Footer from '../../components/Footer';

function mapStateToProps(state) {
	return {
		userinfo: state.userinfo
	};
}

class Home extends React.Component {

	componentDidMount() {
	    this.node.scrollIntoView();//路由切换后回到顶部
	}

	render() {
		return (
			<div ref={node => this.node = node}>
				<HomeHeader cityName={this.props.userinfo.cityName} userName={this.props.userinfo.userName} />
				<DownloadBanner />
				<Category cityName={this.props.userinfo.cityName} lists = {categoryData} />
				<Articles />
				<Redbag />
				<Sales />
				<GuessLikes cityName={this.props.userinfo.cityName} />
				<Footer />
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(Home)
