import React from "react";
import { Modal, Button } from "react-bootstrap";
import HeaderNavigation from "../../components/header/navigation";
import Aside from "../../components/aside/aside";

const LogoutPage = () => {


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
                            <Modal.Title>Modal title</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <p>Modal body text goes here.</p>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary">Close</Button>
                            <Button variant="primary">Save changes</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </body>
        </div>




    )
}

export default LogoutPage