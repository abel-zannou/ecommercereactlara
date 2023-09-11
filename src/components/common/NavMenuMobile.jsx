import React, { Fragment, useState } from 'react'
import { Button, Col, Container, Navbar, Row } from 'react-bootstrap';
import Logo from '../../assets/images/dgst_bien_reduit.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MegaMenuMobile from '../home/MegaMenuMobile';



const NavMenuMobile = () => {
  
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
            
                <Container className="fixed-top shadow-sm bg-white p-1 mb-0" fluid={"true"}>
                    <Row >
                      <Col lg={4} md={4} sm={12} xs={12}>
                          <Button className='btn' onClick={MenuBarClickHandler}><i className='fa fa-bars'></i></Button>
                          <Link to="/"><img className="nav-logo" src={Logo} alt="" /></Link>
                          <Button className='cart-btn'><i className='fa fa-shopping-cart'></i> 3 Items</Button>
                      </Col>
                      

                    </Row>
                </Container>

                <div className={sideNavState ? 'sideNavOpen' : 'sideNavClose'}>
                    <MegaMenuMobile/>
                </div>
                <div className={contentOverlayState ? 'ContentOverlayOpen' : 'ContentOverlayClose'}>
                    {/* Contenu de la superposition */}
                </div>
        </div>
      </Fragment>
  )
}

export default NavMenuMobile