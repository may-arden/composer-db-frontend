// will be container = data and methods regarding categories 

import React from 'react'
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux'

class CategoriesContainer extends React.Component {
   
    componentDidMount() {
        console.log(this.props.fetchCategories)
        // this.props.fetchCategories
    }
   
    render() {
        return (
            <div>
                <h2>categories container here</h2> 
            </div>
        )
    } 
}

export default connect(null, { fetchCategories})(CategoriesContainer); 