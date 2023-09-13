import React, { Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const SuggestedProduct = () => {
    return (
        <Fragment>
            <Container className='text-center' fluid={true}>
                <div className="section-title text-center mb-55">
                    <h2>YOU MAY ALSO LIKE</h2>
                    <p>Some Of Our Exclusive Collection, You May Like</p>
                </div>

                <Row>
                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Link to="/productdetails">
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/0/g/w/note-12-5g-mzb0eiain-redmi-original-imagpgr9ngapjhxq.jpeg?q=70" alt="" />

                                <Card.Body>
                                    <p className="product-name-on-card">REDMI Note 12 5G (Mystique Blue, 128 GB)  (4 GB RAM)</p>
                                    <p className="product-price-on-card">Price: 210000 FCFA</p>


                                </Card.Body>
                            </Card>
                        </Link>

                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Card className="image-box card">
                            <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/o/b/a/-original-imaghbequzj25wy2.jpeg?q=70" alt="" />

                            <Card.Body>
                                <p className="product-name-on-card">REDMI Note 12 5G (Mystique Blue, 128 GB)  (4 GB RAM)</p>
                                <p className="product-price-on-card">Price: 210000 FCFA</p>


                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Card className="image-box card">
                            <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/u/1/h/-original-imagpfbvfu4p55n4.jpeg?q=70" alt="" />

                            <Card.Body>
                                <p className="product-name-on-card">REDMI Note 12 5G (Mystique Blue, 128 GB)  (4 GB RAM)</p>
                                <p className="product-price-on-card">Price: 210000 FCFA</p>


                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Card className="image-box card">
                            <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/o/e/-original-imagstfsbhaaxbeb.jpeg?q=70" alt="" />

                            <Card.Body>
                                <p className="product-name-on-card">REDMI Note 12 5G (Mystique Blue, 128 GB)  (4 GB RAM)</p>
                                <p className="product-price-on-card">Price: 170000 FCFA</p>


                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Card className="image-box card">
                            <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/h/h/z/-original-imaghkvufhjsnw7q.jpeg?q=70" alt="" />

                            <Card.Body>
                                <p className="product-name-on-card">REDMI Note 12 5G (Mystique Blue, 128 GB)  (4 GB RAM)</p>
                                <p className="product-price-on-card">Price: 150000 FCFA</p>


                            </Card.Body>
                        </Card>

                    </Col>

                    <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>

                        <Card className="image-box card">
                            <img className="center" src="https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/b/o/e/-original-imagkgrxzahq3egj.jpeg?q=70" alt="" />

                            <Card.Body>
                                <p className="product-name-on-card">Infinix HOT 20 Play (Luna Blue, 64 GB)  (4 GB RAM)</p>
                                <p className="product-price-on-card">Price: 110000 FCFA</p>


                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}

export default SuggestedProduct