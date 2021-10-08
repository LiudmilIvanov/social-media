import React from "react";
import { Form } from "react-bootstrap";
import styles from '../input/input.module.css'


const Input = ({ type, placeholder, controlId, onChange }) => {

    return (
        <Form.Group className={styles['form-group']} controlId={controlId}>
            <Form.Label>Password</Form.Label>
            <Form.Control type={type} placeholder={placeholder} onChange={onChange} />
            <Form.Text className="text-muted">

            </Form.Text>
        </Form.Group>
    )
}

export default Input