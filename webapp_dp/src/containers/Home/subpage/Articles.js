import React from 'react';
import Article from '../../../components/Article';
import { getArticleData } from '../../../fetch/home/home';

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {

        const result = getArticleData()
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
            console.error('首页article模块获取数据报错, ', ex.message)
        })
        
    }

    
    render() {
        return (
            <div>
            {
                this.state.data.length
                ? <Article data={this.state.data} />
                : <div>加载中... </div>
            }
            </div>
            
        )
    }
}

export default Articles