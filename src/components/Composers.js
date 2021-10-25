import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react'


const Composers = ({ composers, category }) => {
    return (
        <div className='cat_composers'>
            <h3> here are composers classified as {category.name}. select a composer to read more about them. </h3>
        </div>
    )
}

const mapStateToProps =  stateFromStore => {
    return { composers: stateFromStore.composers}
}

export default connect(mapStateToProps)(Composers); 

// import React from 'react'
// import { connect } from 'react-redux';
// import Composers from "../components/Composers"
// import SpecificComposer from "../components/Composer"
// import { fetchComposers } from "../actions/composersActions"

// class ComposersContainer extends React.Component {

//     componentDidMount() {
//         console.log(this.props.fetchComposers)
//         // this.props.fetchComposers; 
//     }
//     render() {
//         return (
//             <div> 
//             <h1>composers container here</h1>
//             < Composers />
//             <SpecificComposer />
//             </div>
//         )
//     } 
// }

// export default connect(null, { fetchComposers })(ComposersContainer); 