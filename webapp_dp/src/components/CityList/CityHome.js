import React from 'react';
import { connect } from 'react-redux';
import CityHot from './CityHot';
import CityMoreHome from './CityMoreHome';

function mapStateToProps(state) {
	return {
		
	};
}

class CityHome extends React.Component {

	componentWillUnmount() {
	    console.log('home unmont')
	}

	handleClick(newCity){
		this.props.changeFn(newCity);
	}

	render() {
		return (
			<div>
				<CityHot clickFn={this.handleClick.bind(this)} />
				<CityMoreHome clickFn={this.handleClick.bind(this)} />
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(CityHome)
