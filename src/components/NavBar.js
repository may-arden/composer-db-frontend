import React from 'react' 
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux' 
import CatDropdown from '../components/CatDropdown'

class NavBar extends React.Component {
    render() {
        return (

            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">composer-db</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                    <Nav.link href="/composers/new">composers submission</Nav.link>
                    <NavDropdown title="categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/categories">all categories</NavDropdown.Item>
                        <NavDropdown.Divier /> 
                        <CatDropdown categories={this.props.categories} />
                    </NavDropdown>
                    </Nav>
            </Navbar.Collapse> 
            </Navbar> 
        )
    }
}

const mapStateToProps = stateFromStore => {
    return {categories: stateFromStore.categories}
}

export default connect(mapStateToProps)(NavBar);