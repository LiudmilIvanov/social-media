import React from "react";
import { ListGroup } from "react-bootstrap";
import styles from './index.module.css'

const Aside = () => {
    return (
        <ListGroup className={styles.container} defaultActiveKey="#link1">
            <ListGroup.Item action href="#link1">
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" disabled>
                Link 2
            </ListGroup.Item>
        </ListGroup>
    )
}

export default Aside;