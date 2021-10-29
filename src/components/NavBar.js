import React from 'react' 
import { Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import CatDropdown from '../components/CatDropdown'
import { connect } from 'react-redux' 


class NavBar extends React.Component {
    render() {
        return (

            <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">composer wiki</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mr-auto">
                  <Nav.Link href="/composers/new">composers submission</Nav.Link>
                    <NavDropdown title="categories" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/categories">all categories</NavDropdown.Item>
                        <NavDropdown.Divider /> 
                        <CatDropdown categories={this.props.categories} />
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse> 
            </Navbar> 
        )
    }
}

const mapStateToProps = state => {
    return {categories: state.categories}
}

export default connect(mapStateToProps)(NavBar);