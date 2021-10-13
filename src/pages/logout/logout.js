import React from "react";
import { Modal, Button } from "react-bootstrap";
import HeaderNavigation from "../../components/header/navigation";
import Aside from "../../components/aside/aside";
import UserContext from "../../Context";

class LogoutPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {}
    }

    static contextType = UserContext

    loggingOut = () => {
        const { user } = this.context
        this.context.logout(user)
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <HeaderNavigation />
                <body>
                    <div>
                        <Aside />
                    </div>
                    <div>
                        <Modal.Dialog>
                            <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <p>Are you sure you wish to logout?</p>
                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="primary" type="submit" onClick={this.loggingOut} >Yes</Button>
                                <Button variant="secondary">Close</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>
                </body>
            </div>
        )
    }


}

export default LogoutPage