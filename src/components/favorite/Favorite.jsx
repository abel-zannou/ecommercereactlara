import React, { Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Favorite = () => {
    return (
    <Fragment>
        <Container className='text-center' fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>PRODUCT COLLECTION</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>

            <Row>
                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://rukminim2.flixcart.com/image/832/832/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70" alt="" />
                        
                        <Card.Body>
                            <p className="product-name-on-card">Men Regular Fit Solid Spread Collar Casual Shirt</p>
                            <p className="product-price-on-card">Price: 10000 FCFA</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove </i></Button>
                            
                        </Card.Body>
                    </Card>

                </Col>

                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://rukminim2.flixcart.com/image/832/832/l02r1jk0/shirt/j/s/j/xxl-fbrml-r-fibermill-original-imagbxyuhy2pcjkg.jpeg?q=70" alt="" />
                        
                        <Card.Body>
                            <p className="product-name-on-card">Men Regular Fit Solid Spread Collar Formal Shirt</p>
                            <p className="product-price-on-card">Price: 12000 FCFA</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove </i></Button>
                            
                        </Card.Body>
                    </Card>

                </Col>

                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://rukminim2.flixcart.com/image/832/832/xif0q/t-shirt/g/4/h/s-half-star-one-nb-nicky-boy-original-imagrenhh8qzz5tq.jpeg?q=70" alt="" />
                        
                        <Card.Body>
                            <p className="product-name-on-card">Men Printed Hooded Neck Cotton Blend White T-Shirt</p>
                            <p className="product-price-on-card">Price: 15000 FCFA</p>
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove </i></Button>
                            
                        </Card.Body>
                    </Card>

                </Col>

                <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>

                    <Card className="image-box card w-100">
                        <img className="center w-75" src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/7/e/c/l-oversizetsrt-101-kajaru-original-imagrk3shy733gyp.jpeg?q=70" alt="" />
                        
                        <Card.Body>
                            <p className="product-name-on-card">Men Printed Round Neck Poly Cotton Dark Green T-Shirt</p>
                            <p className="product-price-on-card">Price: 7000 FCFA</p>
                            
                            <Button className='btn btn-sm'><i className='fa fa-trash-alt'> Remove </i></Button>
                        </Card.Body>
                    </Card>

                </Col>

                

                
                

               

                


            </Row>
        </Container>
    </Fragment>
    )
}

export default Favorite