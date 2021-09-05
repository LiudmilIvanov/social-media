import { Card, Button } from "react-bootstrap";
import styles from './card.module.css'

const CardComponent = () => {

    return (
        <Card className={styles.card}>
            <Card.Header as="h5">Featured</Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )

}

export default CardComponent;