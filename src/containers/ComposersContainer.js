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
        console.log(this.props.fetchComposers)
        this.props.fetchComposers(this.props.category_id);
    }

    render() {
        console.log(this.props.composers)
        return(
            <div classname='composer_container'>
                <h2> composers container </h2>
                
                <Switch>
                    <Route exact path='/categories/:id/composers' component={(routeInfo) => {
                    return <Composers routeInfo={routeInfo} category={this.props.category} composers={this.props.composers}/>
                    }}/> 

                    <Route exact path='/categories/:category_id/composers/:id' component={(routeInfo) => {
                        const id = parseInt(routeInfo.match.params.id)
                        const specComposer = this.props.composers.find(c => c.id === id)
                    console.log(routeInfo)
                    return !!specComposer ? <SpecificComposer routeInfo={routeInfo} specComposer={specComposer}/> :
                <div> Loading... </div>
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