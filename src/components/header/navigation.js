import { Navbar, Container, Nav } from "react-bootstrap";
import Dropdown from "@restart/ui/esm/Dropdown";
import Link from "./link";
import getNavigation from "../../utils/navigation";
import React from "react";
import UserContext from "../../Context";

class HeaderNavigation extends React.Component {

    static contextType = UserContext

    render() {
        const { loggedIn, user } = this.context
        const links = getNavigation(loggedIn, user)

        return (
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Social media</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {links.map(nav => {
                                return (
                                    <Link title={nav.title} href={nav.link} />
                                )
                            })}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )

    }


}

export default HeaderNavigation;

