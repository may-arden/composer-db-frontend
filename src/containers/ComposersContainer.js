// set state and handle events here 
// search function goes here 
// mapStateToProps goes here 

// // specific composer here 
import React from 'react';
import Composers from '../components/Composers'
import { connect } from 'react-redux';
import { fetchComposers } from '../actions/composersActions'
import { Switch, Route } from 'react-router-dom'
import SpecificComposer from '../components/Composer'
// import Counter from '../components/counter.js'
import ComposersClass from '../components/ComposersClass'

class ComposersContainer extends React.Component {

    componentDidMount() {
        //console.log(this.props.fetchComposers)
        // debugger 
        this.props.fetchComposers(this.props.match.params.category_id);
        // debugger 
    }

    render() {
        // console.log(this.props.composers)
        // debugger
        return(
    
            <div className='composer_container'>
                <Switch>
                    <Route exact path='/categories/:category_id/composers' component={(routeInfo) => {
                        // return this.props.composers.length > 0 ? <Composers routeInfo={routeInfo} composers={this.props.composers}/> : <p>Loading...</p>
                     return this.props.composers.length > 0 ? <ComposersClass routeInfo={routeInfo} composers={this.props.composers}/> : <p>Loading...</p>
                    }}/> 

                    <Route exact path='/categories/:category_id/composers/:id' component={(routeInfo) => {
                        // debugger 
                        const id = parseInt(routeInfo.match.params.id)
                        const specComposer = this.props.composers.find(c => c.id === id)
                        // debugger 
                        console.log(routeInfo)  
                        return !!specComposer ? <SpecificComposer routeInfo={routeInfo} specComposer={specComposer}/> : <p>Loading...</p>
                        // return this.props.composers.length > 0 ? <SpecificComposer routeInfo={routeInfo} specComposer={specComposer}/> : <p>Loading...</p>
                  
                    }} /> 
                </Switch>  
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {composers: state.composers}
}



export default connect(mapStateToProps, { fetchComposers })(ComposersContainer); 


// next to each componser on http://localhost:3001/categories/1/composers
// have a button next to each composer that says X Upvotes (where x is a number starting at 0)

// don't use redux or persist to the database - just local react state