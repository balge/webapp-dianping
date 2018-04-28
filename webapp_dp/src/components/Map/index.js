import React, { Component } from 'react';
import { getDetailData } from '../../fetch/detail/detail';
import Banner from '../../components/DownloadBanner';
import './index.less';

class Map extends Component {

    constructor(props) {
        super(props);
        this.state = {
            address: ''
        }
    }

    componentDidMount() {
        const result = getDetailData(this.props.params.id);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                address: json.address
            })
        })
    }
    goBack(){
        window.history.back()
    }

    render() {
        const url = `https://m.amap.com/search/mapview/keywords=${this.state.address}`;
        return (
            <div className="map-wrap">
                <div className="back" onClick={this.goBack.bind(this)} />
                <Banner />
                {
                    this.state.address !== '' ?
                    (
                        <div className="map">
                            <iframe title="map" src={url} width="100%" height="100%" scrolling="auto" align="top" />
                        </div>
                    ): (<div className="load-wrap">
                        <div className="loading-img"></div>
                        <span>正在加载...</span>
                    </div>)
                }
            </div>
        );
    }
}

export default Map;
