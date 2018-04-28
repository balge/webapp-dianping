import React, { Component } from 'react';
import { getCommentData } from '../../../fetch/detail/detail';
import Comment from '../../../components/Comment';
class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataMore: []
        }
    }

    componentDidMount() {
        const result = getCommentData(this.props.id);
        result.then(res => {
            return res.json()
        }).then(json => {
            this.setState({
                data: json.comment.slice(0, 3),
                dataMore: json.comment.slice(3)
            })
        })
    }

    handleMore(){
        this.setState({
            data: this.state.data.concat(this.state.dataMore)
        })
    }
      
    render() {
        return (
            <div>
                {
                    this.state.data.length ?
                    <Comment data={this.state.data} moreFn={this.handleMore.bind(this)} /> : ''
                }
            </div>
        );
    }
}

export default Comments;
