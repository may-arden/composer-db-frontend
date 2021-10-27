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

class ComposersContainer extends React.Component {

    componentDidMount() {
        //console.log(this.props.fetchComposers)
        this.props.fetchComposers(this.props.match.params.category_id);
    }

    render() {
        console.log(this.props.composers)
        // debugger
        return(
    
            <div className='composer_container'>
                <Switch>
                    <Route exact path='/categories/:category_id/composers' component={(routeInfo) => {
                        return this.props.composers.length > 0 ? <Composers routeInfo={routeInfo} composers={this.props.composers}/> : <p>Loading...</p>
                    }}/> 

                    <Route exact path='/categories/:category_id/composers/:id' component={(routeInfo) => {
                        debugger 
                        const id = parseInt(routeInfo.match.params.id)
                        const specComposer = this.props.composers.find(c => c.id === id)
                         
                        // return !!specComposer ? <SpecificComposer routeInfo={routeInfo} specComposer={specComposer}/> : <p>Loading...</p>
                        return this.props.composers.length > 0 ? <SpecificComposer routeInfo={routeInfo} specComposer={specComposer}/> : <p>Loading...</p>
                //   debugger
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