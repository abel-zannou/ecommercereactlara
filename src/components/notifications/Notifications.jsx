import React, { Fragment, useState } from 'react'
import { Button, Card, Col, Container, Form, Modal, Row } from 'react-bootstrap'

const Notifications = () => {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <Fragment>

            <Container className="TopSection">
                <Row>
                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                        <Card className="notification-card" onClick={handleShow}>
                            
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className=" p-1 " md={6} lg={6} sm={12} xs={12}>
                        <Card className="notification-card" onClick={handleShow} >
                           
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1   px-0 text-primary m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Unread</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>
                        <Card className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card className="notification-card">
                            <Card.Body>
                                <h5> Lorem Ipsum is simply dummy text of the printing</h5>
                                <p className="py-1  px-0 text-success m-0"><i className="fa fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1  px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" md={6} lg={6} sm={12} xs={12}>

                        <Card className="notification-card">
                            <Card.Body>
                                <h6> Lorem Ipsum is simply dummy text of the printing</h6>
                                <p className="py-1 px-0 text-success m-0"><i className="fa  fa-bell"></i>   Date: 22/12/2010 | Status: Read</p>
                            </Card.Body>
                        </Card>

                    </Col>

                </Row>
            </Container>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <h6><i className="fa fa-bell"></i> Date:13/09/2023</h6>
                   
                </Modal.Header>
                <Modal.Body>
                    <h6>BIENVENU DANS LE MONDE DES DEVELOPPEURS WEB</h6>

                    <p>Le développement web est apparu avec l'avènement d'internet. Dans un secteur digital en pleine expansion, 
                        c'est une compétence très recherchée par les entreprises actuellement. 
                        La mission du développeur est d'être capable de créer et de développer un site web ou une application mobile.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>

            



        </Fragment >
    )
}

export default Notifications