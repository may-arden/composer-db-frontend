import React from 'react'
import { connect } from 'react-redux'
import { addComposer } from '../actions/composersActions'
import { fetchCategories } from '../actions/categoriesActions'

class ComposerSubmissionContainer extends React.Component {
    state = {
        name: '',
        description: '',
        image_src: '',
        category_id: '' 
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = e => {
        // will call action that will dispatch new obj to reducer to update store state
        // action will make post fdetch to persist to db
        e.preventDefault();
        this.props.addComposer(this.state)
    }



    render() {
        // {console.log(this.state)}
        return (
            <div>
                <h2>composer submission form:</h2> 
                    <form onSubmit={this.handleSubmit}>
                        <label>name:</label>
                        <input type="text" 
                        value={this.state.name} 
                        onChange={this.handleChange} 
                        name="name"/>

                        <br/>

                        <label>description:</label>
                        <input type="text"
                        value={this.state.description}
                        onChange={this.handleChange}
                        name="description" />

                        <br/> 

                        <label>image source</label>
                        <input type="text"
                        value={this.state.image_src} 
                        onChange={this.handleChange}
                        name="image_src" />

                        <br/> 

                        <label>category:</label>
                        <ul>
                            <ol><input type="radio"
                                value="baroque"
                                checked={this.state.category_id === "baroque"}
                                onChange={this.handleChange}
                                name="category" />
                                baroque
                            </ol>
                            <ol><input type="radio"
                                value="classical"
                                checked={this.state.category_id === "classical"}
                                onChange={this.handleChange}
                                name="category" />
                                classical
                            </ol>
                            <ol><input type="radio"
                                value="romantic"
                                checked={this.state.category_id === "romantic"}
                                onChange={this.handleChange}
                                name="category" />
                                romantic
                            </ol>
                            <ol><input type="radio"
                                value="modern"
                                checked={this.state.category_id === "modern"}
                                onChange={this.handleChange}
                                name="category" />
                                modern 
                            </ol>
                            <br/>
                            <input type="submit" value="submit" /> 
                        </ul>

                    </form>
            </div>
            
        )
    } 
}

export default connect(null, { addComposer, fetchCategories })(ComposerSubmissionContainer); 