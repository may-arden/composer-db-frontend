import React from 'react'
import { connect } from 'react-redux';
import Composers from "../components/Composers"
import { fetchComposers } from "../actions/composersActions"

class ComposersContainer extends React.Component {

    componentDidMount() {
        console.log(this.props.fetchComposers)
        // this.props.fetchComposers; 
    }
    render() {
        return (
            <div> 
            <h1>composers container here</h1>
            < Composers />
            </div>
        )
    } 
}

export default connect(null, { fetchComposers })(ComposersContainer); 