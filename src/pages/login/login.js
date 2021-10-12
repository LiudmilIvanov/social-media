import React from "react";
import HeaderNavigation from "../../components/header/navigation";
import { Form, Button, Image } from "react-bootstrap";
import Aside from "../../components/aside/aside";
import styles from '../login/login.module.css'
import Input from "../../components/input/input";
import authenticate from "../../utils/authenticate";

const loginUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA-aRabJPP6r4hWlP_TSROdT76tImPWFe4'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state

        await authenticate(loginUrl, {
            email, password
        }, () => {
            this.props.history.push('/')

        }, (e) => {
            console.log('Error', e)
        })
    }

    render() {
        const { email, password } = this.state

        return (
            <div>
                <HeaderNavigation />
                <body>
                    <div>
                        <Aside />
                    </div>
                    <div>
                        <Form onSubmit={this.handleSubmit}>
                            <Input value={email} onChange={(e) => this.handleChange(e, 'email')} controlId="formBasicEmail" type="email" placeholder="Enter email" />
                            <Input value={password} onChange={(e) => this.handleChange(e, 'password')} controlId="formBasicPassword" type="password" placeholder="Password" />

                            {/* <Form.Group className={styles['form-group']} controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group> */}

                            <Button className={styles['form-group']} variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </body>
            </div>
        )
    }

}

export default LoginPage