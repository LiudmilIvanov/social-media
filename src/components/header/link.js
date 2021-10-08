import { Nav } from "react-bootstrap";
import { Link  } from "react-router-dom";



const LinkComponent = ({ href, title }) => {
    return (
        <Nav.Link as={Link} to={href}>{title}</Nav.Link>
    )
}

export default LinkComponent;