import {NavDropdown} from 'react-bootstrap'

const CatDropdown = (props) => {
    return (
        <>
        {props.categories.map(category => {
            debugger
            return <NavDropdown.Item key={category.id} href={`/categories/${category.id}/composers`}>{category.name}</NavDropdown.Item>
        })}
        </> 
    )
}

export default CatDropdown; 

