import React from 'react';
import { connect } from 'react-redux';
import { provinces } from './CityData';

function mapStateToProps(state) {
	return {
		
	};
}

class CityMoreHome extends React.Component {

	scrollToAnchor(anchorName) {
		let anchorElement = document.getElementById(anchorName);
		if(anchorElement) {
			anchorElement.scrollIntoView();
		}
	}

	handleClick(cityName){
		this.props.clickFn(cityName);
	}

	render() {
		return (
			<div className="J_allcity">
				<div className="hd">更多城市</div>
				<div className="home-place-list provinces-list">
					<ul className="clearfix">
						{
							provinces.map((elem, index) => {
								return (
									<li onClick={this.scrollToAnchor.bind(this, elem.initial)} key={index} >
										<span>{elem.initial}</span>
									</li>
								);
							})
						}
					</ul>
				</div>
				<div>
				{
					provinces.map((elem, index) => {
						return (
							<div key={index} className="box">
								<div className="hd" id={elem.initial}>{elem.initial}</div>
								<div className="home-place-list citys-list">
									<ul className="clearfix">
										{
											elem.list.map((val, key) => {
												return (
													<li onClick={this.handleClick.bind(this, val.name)} key={key}><span>{val.name}</span></li>
												);
											})
										}
									</ul>
								</div>
							</div>
						);
					})
				}
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(CityMoreHome)
