import React from 'react';
import Sale from '../../../components/Sale';
import { getSaleData } from '../../../fetch/home/home';

class Sales extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div>
            {
                this.state.data.length
                ? <Sale data={this.state.data} />
                : <div>加载中... </div>
            }
            </div>
            
        )
    }
    componentDidMount() {

        const result = getSaleData()
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.length) {
                this.setState({
                    data: data
                })
            }
        }).catch(ex => {
            // 发生错误
            console.error('首页sale模块获取数据报错, ', ex.message)
        })
        
    }
}

export default Sales