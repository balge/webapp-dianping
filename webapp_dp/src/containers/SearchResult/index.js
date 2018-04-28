import React, { Component } from 'react';
import DownloadBanner from '../../components/DownloadBanner';
import ResultHeader from '../../components/ResultHeader';
import List from './subpage/List';

class SearchResult extends Component {

    render() {
        return (
            <div>
            <ResultHeader cityName={this.props.params.city} keyword={this.props.params.keyword}/>
            <DownloadBanner />
            <List cityName={this.props.params.city} keyword={this.props.params.keyword}/>
            </div>
        );
    }
}

export default SearchResult;
