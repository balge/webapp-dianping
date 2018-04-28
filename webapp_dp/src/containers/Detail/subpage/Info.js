import React, { Component } from 'react';
import ShopInfo from '../../../components/ShopInfo';
import { getDetailData } from '../../../fetch/detail/detail';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }

    componentDidMount() {
        const result = getDetailData(this.props.id);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json
            })
        })
    }
      
    render() {
        return (
            <div>
                {
                    this.state.data ? <ShopInfo id={this.props.id}  data={this.state.data} /> : 
                    (<div className="load-wrap">
                        <div className="loading-img"></div>
                        <span>正在加载...</span>
                    </div>)
                }
            </div>
        );
    }
}

export default Info;
