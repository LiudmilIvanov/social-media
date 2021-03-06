import { NavDropdown } from "react-bootstrap";


const Dropdown = (props) => {
    console.log('dropdown')
    return (
        <NavDropdown title={props.title} id="basic-nav-dropdown">
            <NavDropdown.Item href={"#action/3.1"}>Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    )
}

export default Dropdown;