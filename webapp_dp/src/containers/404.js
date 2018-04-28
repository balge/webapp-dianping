import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../components/HomeHeader';
import Category from '../components/Category';
import categoryData from '../components/Category/CategoryData';
import GuessLikes from './Home/subpage/GuessLikes';
import Footer from '../components/Footer';

import './404.less';

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
//     }
// }


class NotFound extends Component {

    componentDidMount() {
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <div className="not-found">
                    <div className="not-found-content">
                        <div className="img-not-found"></div>
                        <div className="not-found-right">
                            <div className="not-found-words">抱歉！页面暂时无法访问......
                                <a className="back-to-home" href="//m.dianping.com">去大众点评首页</a>
                            </div>
                        </div>
                    </div>
                </div>
                <Category lists = {categoryData} />
                <GuessLikes cityName={this.props.userinfo.cityName} />
                <Footer />
            </div>
        );
    }
}

export default connect(
    mapStateToProps
)(NotFound);
