import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Fragment>
            <Container>
                <Row className='p-2'>
                    <Col className='shadow-sm bg-white mt-2' lg={12} md={12} sm={12} xs={12}>
                        <Row className='text-center'>
                            <Col className='d-flex justify-content-center' lg={6} md={6} sm={12} xs={12}>
                                <Form className='onboardForm'>
                                    <h4 className='section-title-login'>CONTACT WITH US</h4>
                                    <h6 className='section-sub-title'>Please Contact With Us</h6>

                                    <input type="text" className='form-control m-2' placeholder='Enter Mobile Number' />

                                    <input type="email" className='form-control m-2' placeholder='Enter Email' />

                                    <input type="text" className='form-control m-2' placeholder='Enter Your Message' />

                                    <Button className='btn btn-block m-2 site-btn-login'>Submit</Button>
                                </Form>
                            </Col>

                            <Col className='p-0 m-0 Desktop' lg={6} md={6} sm={6} xs={6}>
                                {/* Ici pour l'image je lui dis que c'est pour Destop que tu affiche. c'est pourquoi j'utilise la 
                        classe "Desktop" de UserLoginPage */}
                                <br /><br />
                                <p className='section-title-contact'>Calavi Kpota Tokpa Zoungo, La Von en Face Du Marche Maison ZANNOU</p>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.17875562103!2d2.3002290730177997!3d6.448741796813222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a907d5334d9b%3A0xb28a9b10ccbc460a!2sAbomey%20Calavi!5e0!3m2!1sfr!2sbj!4v1694537957986!5m2!1sfr!2sbj" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default Contact