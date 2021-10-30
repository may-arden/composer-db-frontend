// this component should map over the array of composers 
// rendering buttons 

import React from 'react';
import { render } from 'react-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import HookCounter from './HookCounter';
import Counter from './Counter'; 



// your passed arguments are available to you in an object called props, which in a class
// based component can be referenced and destructured in the render method as follows
// render() {
//      const { composer: Composer } = this.props;
// }

// this is the array of composers 
// this.props.name 
// all components have render 
// whatever the render functions returns is what gets rendered 



class Composers extends React.Component {


    render() {
       
        return (
            <div className="composer">
                <h4>choose a composer</h4>
                {this.props.composers.map(composer => 
                    <div key={composer.id}> 
                      <br/>
                        <p>
                          <Link to={`/categories/${composer.category_id}/composers/${composer.id}`}>
                              <button>{composer.name}</button>
                          </Link>
                          {/* <button onClick={handleClick}> (this many) upvotes </button> */}
                          {/* <HookCounter/> */}
                          <Counter /> 
                        </p>
                    </div>)}
            </div>
        )
      }
  }



const mapStateToProps = state => {     
    return { composers: state.composers }
 
}

export default connect(mapStateToProps)(Composers);