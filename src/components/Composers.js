import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Counter from './Counter'; 

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