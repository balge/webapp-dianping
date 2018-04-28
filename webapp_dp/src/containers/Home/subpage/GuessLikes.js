import React from 'react';
import GuessLike from '../../../components/GuessLike';
import { getListData } from '../../../fetch/home/home';

class GuessLikes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            hasMore: false
        }
        this.loadMoreData = this.loadMoreData.bind(this);
    }
    render() {
        return (

            <div className="J_guesslike" ref="likewrap">
                <div className="bord"></div>
                <div className="title">猜你喜欢</div>
                {
                    this.state.data.length ?
                    <GuessLike data={this.state.data} hasMore={this.state.hasMore} /> : ''
                }
                {
                    this.state.hasMore === true ? 
                    <div className="load-wrap">
                        <div className="loading-img"></div>
                        <span>正在加载...</span>
                    </div>
                    : <a className="load-more" href="//m.dianping.com/tuan/hangzhou?from=m_reculike">查看更多</a>
                }
            </div>

        )
    }
    componentDidMount() {

        this.canLoading = true;
        this.page = 1;
        this.loadFirstData();
        window.addEventListener('scroll', this.loadMoreData);

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.loadMoreData);
        clearInterval(this.timer);
    }

    loadFirstData() {

        const cityName = this.props.cityName || "杭州";
        {
            const result = getListData(cityName, 1);
           this.handleResult(result);
        }
    }

    loadMoreData() {

        const dom = this.refs.likewrap;
        const offsetTop = dom.offsetTop; //容器距离顶部高度
        const windowsH = window.screen.height; //窗口高度
        const documentH = dom.clientHeight;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条下拉高度
        if (scrollTop + windowsH >= documentH + offsetTop) { //到底了
            if(this.canLoading === true){
                this.canLoading = false;
                const cityName = this.props.cityName || "杭州";
                this.timer = setTimeout(() =>
                    {
                        this.page++;
                        const result = getListData(cityName, this.page);
                       this.handleResult(result);
                    }
                ,800)
            }
        }
    }

    handleResult(result) {
        console.log('当前渲染数据---：' + this.props.cityName + '的第' + this.page + '页')
        result.then(res => {
            return res.json()
        }).then(json => {
            // 处理获取的数据
            const data = json
            if (data.data.length && data.hasMore === true) {
                    this.setState({
                        data: this.state.data.concat(data.data),
                        hasMore: data.hasMore
                    })
                    this.canLoading = true;
            }else{
                this.setState({
                    hasMore: data.hasMore
                })
                this.canLoading = false;
            }
        }).catch(ex => {
            // 发生错误
            console.error('首页guesslike模块获取数据报错, ', ex.message)
        })
    }
}

export default GuessLikes