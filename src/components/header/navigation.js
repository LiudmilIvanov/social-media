import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";
import Link from "./link";

const HeaderNavigation = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Social media</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link title="Home" href="/"/>
                        <Link title="Link"/>
                        <Link title="Login" href="/login"/>
                        <Dropdown title="Dropdown"/>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default HeaderNavigation;

