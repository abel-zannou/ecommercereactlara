import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import Logo from '../../assets/images/dgst_bien_reduit.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';

const NavMenuDesktop = () => {

    const [sideNavState, setSideNavState] = useState(false);
    const [contentOverlayState, setContentOverlayState] = useState(false);

    const MenuBarClickHandler = () => {
        if (sideNavState) {
            setSideNavState(false);
            setContentOverlayState(false);
        } else {
            setSideNavState(true);
            setContentOverlayState(true);
        }
    }

  return (
    <Fragment>
        <div className="TopSectionDown">
            <Navbar fixed={"top"} className="navbar" bg='light'>
                <Container className="fixed-top shadow-sm bg-white p-1 mb-0" fluid={"true"}>
                    <Row >
                      <Col lg={4} md={4} sm={12} xs={12}>
                        <Button className='btn' onClick={MenuBarClickHandler}><i className='fa fa-bars'></i></Button>
                          <Link to="/"><img className="nav-logo" src={Logo} alt="" /></Link>
                      </Col>
                      <Col className="p-1 mt-1 " lg={4} md={4} sm={12} xs={12}>
                          <div className="input-group w-100">
                            <input type="text" className='form-control' />
                            <Button type='button' className='btn site-btn'><i className='fa fa-search'></i></Button>
                          </div>
                      </Col>

                      <Col className="p-1 mt-1 " lg={4} md={4} sm={12} xs={12}>

                      <Link to="/" className="btn"><i className='fa h4 fa-heart'></i><sup><span className='badge text-white bg-danger'>3</span></sup></Link>
                          <Link to="/" className="btn"><i className='fa h4 fa-bell'></i><sup><span className='badge text-white bg-danger'>5</span></sup></Link>
                          
                          <a href="" className='btn'><i className='fa h4 fa-mobile-alt'></i></a>
                          <Link to="/" className='h4 btn'>Login</Link>
                          <Button className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items</Button>
                      </Col>

                    </Row>
                </Container>
                
            </Navbar>
        </div>

        <div className={sideNavState ? 'sideNavOpen' : 'sideNavClose'}>
                    <MegaMenuAll/>
        </div>
        <div className={contentOverlayState ? 'ContentOverlayOpen' : 'ContentOverlayClose'}>
            {/* Contenu de la superposition */}
        </div>
    </Fragment>
  )
}

export default NavMenuDesktop