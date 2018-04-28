import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
	return {
		
	};
}

class CityIntl extends React.Component {

	componentWillUnmount() {
	    console.log('intl unmont')
	}
	render() {
		return (
			<div style={{textAlign: 'center', padding: '40px 0 20px 0', fontSize: '18px'}}>
				国际地区暂未开通，敬请期待！～～
			</div>
		);
	}
}

export default connect(
	mapStateToProps
)(CityIntl)
