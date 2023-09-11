import React, { Fragment, useRef } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const NewArrival = () => {

    const slider = useRef(null);

    const next = () => {
        slider.current.slickNext();
    }

    const previous = () => {
        slider.current.slickPrev();
    }


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <Fragment>
        <Container className='text-center' fluid={true}>
            <div className="section-title text-center mb-55">
                <h2>NEW ARRIVAL
                    <a className='btn btn-sm ml-2 ' onClick={previous}><i className='fa fa-angle-left'></i></a>

                    <a className='btn btn-sm ml-2 ' onClick={next}><i className='fa fa-angle-right'></i></a>
                </h2>
                <p>Some Of Our Exclusive Collection, You May Like</p>
            </div>

            <Row>
                
            <Slider ref={slider} {...settings}>
          <div>
            <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/l08gsy80/watch/z/i/3/1-pwrm-king-piaoma-men-original-imagc2k8ch8vkstx.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Day And Date Functioning High Quality Combo Of King Printed Bracelet Analog Watch - For Men PWRM-King</p>
                    <p className="product-price-on-card">Price: 10500 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/a/i/-original-imagrcjkpwzzbttr.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Mesh Strap All Black Avatar Day and Date Functioning Quartz Analog Watch - For Men LS2917</p>
                    <p className="product-price-on-card">Price: 8000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/x/d/n/-original-imagrk9s3hdczsmd.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Analog Watch - For Men LD-BK054-BLACK</p>
                    <p className="product-price-on-card">Price: 9000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/d/h/f/gold625-626-gold-bracelet-gold-dd-casado-men-original-imagzbzdrdx8wk4t.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Branded Bracelet | Gold Plated | Diamond Studded | 3D Cut Glass | Day and Date Analog Watch - For Men 626-GOLD-BRACELET-GOLD-DD</p>
                    <p className="product-price-on-card">Price: 40000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/l3hmwsw0/watch/b/s/i/2-stainless-steel-black-dial-no-chronograph-watch-and-king-original-imagehs5dzqhhhps.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">New Fashion Watch for Men and Boys Premium Collection King Bracelet Watch Combo Analog Watch </p>
                    <p className="product-price-on-card">Price: 21000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/n/d/w/-original-imagrk9smhqfrndu.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">ROYAL BLUE WITH DAY AND DATE WORKING Analog Watch - For Men 7107-BLUE</p>
                    <p className="product-price-on-card">Price: 12000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/z/p/c/-original-imagpzjfgmbpmscn.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Briggs Analog Watch - For Men CH2927I</p>
                    <p className="product-price-on-card">Price: 25000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/832/832/xif0q/watch/m/m/i/-original-imagswy6kwmmfbvf.jpeg?q=70" alt="" />
                
                <Card.Body>
                    <p className="product-name-on-card">Kronos Analog Watch - For Men 3287QM04</p>
                    <p className="product-price-on-card">Price: 18000 FCFA</p>
                    
                    
                </Card.Body>
            </Card>
          </div>
        </Slider>

            </Row>
        </Container>
    </Fragment>
  )
}

export default NewArrival