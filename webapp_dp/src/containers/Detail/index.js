import React, { Component } from 'react';
import Header from '../../components/DetailHeader';
import Banner from '../../components/DownloadBanner';
import Info from './subpage/Info';
import Comments from './subpage/Comments';
import Footer from '../../components/Footer';
import './index.less';

class Detail extends Component {

    render() {
        return (
            <div>
                <Header />
                <Banner />
                <Info id={this.props.params.id} />
				<Comments id={this.props.params.id} />
                <Footer />
            </div>
        );
    }
}

export default Detail;
