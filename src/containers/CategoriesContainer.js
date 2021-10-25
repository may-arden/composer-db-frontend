// will be container = data and methods regarding categories 

import React from 'react'
import { fetchCategories } from '../actions/categoriesActions'
import { connect } from 'react-redux'
import Categories from '../components/Categories'


class CategoriesContainer extends React.Component {
   
    componentDidMount() {
        console.log(this)
        // debugger
        // this.props.fetchCategories;
    }
   
    render() {
        return (
            <div>
                <h2>categories container here</h2>  
                <Categories /> 
            </div>
        )
    } 
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps, { fetchCategories })(CategoriesContainer); 