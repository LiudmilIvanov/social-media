import { Nav } from "react-bootstrap";


const Link = ({ href, title }) => {
    return (
        <Nav.Link href={href}>{title}</Nav.Link>
    )
}

export default Link;