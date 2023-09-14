import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Apple from '../../../src/assets/images/apple.png'
import Google from '../../../src/assets/images/google.png'

const FooterDesktop = () => {
  return (
      <Fragment>
          <div className='footerback shadow-sm m-0 mt-5 pt-3'>
              <Container>
                  <Row className='px-0 my-5'>
                      <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                          <h5 className='footer-menu-title'>OFFICE ADRESS</h5>
                          <p>Calavi Kpota Tokpa Zoungo <br /> 
                              Email: dgstechnologie@gmail.com
                              <h5 className='footer-menu-title'>SOCIAL LINK</h5>
                              <a href="" ><i className='fab m-1 h4 fa-facebook'></i></a>
                              <a href="" ><i className='fab m-1 h4 fa-instagram'></i></a>
                              <a href="" ><i className='fab m-1 h4 fa-twitter'></i></a>
                          </p>
                      </Col>
                      <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                          <h5 className='footer-menu-title'>THE COMPANY</h5>
                          <Link to="/" className='footer-link'>About Us</Link> <br />
                          <Link to="/" className='footer-link'>Company Profile</Link><br />
                          <Link to="/contact" className='footer-link'>Contact Us</Link>
                      </Col>
                      <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                          <h5 className='footer-menu-title'>MORE INFO</h5>
                          <Link to="/purchase" className='footer-link'>How To Purchase</Link> <br />
                          <Link to="/privacy" className='footer-link'>Privacy Policy</Link> <br />
                          <Link to="/refund" className='footer-link'>Refund Policy</Link> <br />
                      </Col>
                      <Col className='p-2' lg={3} md={3} sm={6} xs={12}>
                          <h5 className='footer-menu-title'>DOWNLOAD APPS</h5>
                          <a href=""><img className='' src={Apple} alt="" /></a><br />
                          <a href=""><img className='mt-2' src={Google} alt="" /></a><br />

                          Change Your Language <br />
                          <div id='google_translate_element'></div>
                      </Col>
                  </Row>
              </Container>

              <Container fluid={true} className='text-center m-0 pt-3 pb-1 bg-dark'>
                <Container>
                  <Row>
                    <h6 className='text-white'>&copy; Copyrightg 2023 by DSGTechnologie, All Right Reserved</h6>
                  </Row>
                </Container>
              </Container>
          </div>
      </Fragment>
  )
}

export default FooterDesktop