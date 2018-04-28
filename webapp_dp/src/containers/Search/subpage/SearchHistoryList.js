import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import LocalStore from '../../../util/localStore';
// import { HISTORYKEY} from '../../../config/localStoreKey';
// import * as userHistorykeyActionsFromOtherFile from '../../../actions/historykey';


// function mapStateToProps(state) {
//     return {
//         userhistorykey: state.userhistorykey
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return {
//         userHistorykeyActions: bindActionCreators(userHistorykeyActionsFromOtherFile, dispatch)
//     }
// }

class SearchHistoryList extends Component {


    clickHandle(keyword){
        this.props.searchFn(keyword);
    }

    clearHandle(){

        this.props.clearFn();
        // this.props.userHistorykeyActions.update({
        //     keyword: ''
        // })
        // LocalStore.setItem(HISTORYKEY, '');
    }

    render() {
        let list = this.props.keylist || '[]';
        list = JSON.parse(list);
        return (
            <div>
            {
                list.length > 0 ? 
                (<div className="J_history_list key_list clearfix">
                    <div className="J_history_title">搜索记录</div>
                    <div className="history_list">
                        {
                            list.map((elem, index) => {
                                return (
                                       elem !== '' ?  
                                       (<span key={index} onClick={this.clickHandle.bind(this, elem)}>{elem}</span>)
                                        : ''
                                );
                            })
                        }
                    </div>
                    <div className="J_history_clear" onClick={this.clearHandle.bind(this)}>清除搜索记录</div>
                </div>):''
            }
            </div>
        );
    }
}
export default SearchHistoryList
