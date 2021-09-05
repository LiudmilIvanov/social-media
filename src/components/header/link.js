import { Nav } from "react-bootstrap";


const Link = (props) => {
    console.log(props)
    return (
        <Nav.Link href="#home">{props.title}</Nav.Link>
    )
}

export default Link;