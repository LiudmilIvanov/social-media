import React from "react";
import HeaderNavigation from "../../components/header/navigation";
import { Form, Button, Image } from "react-bootstrap";
import Aside from "../../components/aside/aside";
import styles from '../register/register.module.css'
import Input from "../../components/input/input";
import authenticate from "../../utils/authenticate";
import registerButon from '../../image/registerButon.png'

const registerUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA-aRabJPP6r4hWlP_TSROdT76tImPWFe4'

class RegisterPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = { checkbox: '' }
    }

    handleChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const { email, password, rePassword } = this.state

        if (password !== rePassword) {
            return
        }

        await authenticate(registerUrl, {
            email, password
        }, () => {
            this.props.history.push('/')

        }, (e) => {
            console.log('Error', e)
        })
    }

    render() {
        const { email, password, rePassword } = this.state

        return (
            <div>
                <HeaderNavigation />
                <body>
                    <div>
                        <Aside />
                    </div>
                    <div>
                        <Image className={styles.image} src={registerButon} fluid />

                        <Form onSubmit={this.handleSubmit}>
                            <Input value={email} onChange={(e) => this.handleChange(e, 'email')} controlId="formBasicEmail" type="email" placeholder="Enter email" />
                            <Input value={password} onChange={(e) => this.handleChange(e, 'password')} controlId="formBasicPassword" type="password" placeholder="Password" />
                            <Input value={rePassword} onChange={(e) => this.handleChange(e, 'rePassword')} controlId="formBasicPassword" type="password" placeholder="Repeat Password" />
                            {/* <Form.Group onClick={this.updateCheckbox} className={styles['form-group']} controlId="formBasicCheckbox" >
                                <Form.Check type="checkbox" label="Agree with the terms of agreement" />
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

export default RegisterPage