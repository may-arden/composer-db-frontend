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
        this.setState({
            name: '',
            description: '',
            image_src: '',
            category_id: ''
        })
    }

    componentDidMount() {
        console.log(this.props.fetchCategories)
        this.props.fetchCategories();
    }



    render() {
        {console.log(this.state)}
        return (
            <div>
                <h2>this is the composer submission form container</h2> 
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
                                value="1"
                                checked={this.state.category_id === "1"}
                                onChange={this.handleChange}
                                name="category_id" />
                                baroque
                            </ol>
                            <ol><input type="radio"
                                value="2"
                                checked={this.state.category_id === "2"}
                                onChange={this.handleChange}
                                name="category_id" />
                                classical
                            </ol>
                            <ol><input type="radio"
                                value="3"
                                checked={this.state.category_id === "3"}
                                onChange={this.handleChange}
                                name="category_id" />
                                romantic
                            </ol>
                            <ol><input type="radio"
                                value="4"
                                checked={this.state.category_id === "4"}
                                onChange={this.handleChange}
                                name="category_id" />
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