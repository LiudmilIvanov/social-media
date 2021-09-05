import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";
import Link from "./link";

const Navigation = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link title="Home"/>
                        <Link title="Link"/>
                        <Dropdown title="Dropdown"/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;

