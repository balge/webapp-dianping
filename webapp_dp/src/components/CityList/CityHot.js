import React from 'react';
import { connect } from 'react-redux';
import { hotPlaces } from './CityData';

function mapStateToProps(state) {
	return {
		
	};
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

class CityHot extends React.Component {

	handleClick(cityName){
		this.props.clickFn(cityName);
	}

	render() {
		return (
			<div className="J_hotcity">
				<div className="hd">热门城市</div>
				<div className="home-place-list">
					<ul className="J_citylist clearfix">
					{
						hotPlaces.map((elem, index) => {
							return (
								<li onClick={this.handleClick.bind(this, elem.name)} key={index}><span>{elem.name}</span></li>
							);
						})
					}
					</ul>
				</div>
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
    mapDispatchToProps
)(CityHot)
