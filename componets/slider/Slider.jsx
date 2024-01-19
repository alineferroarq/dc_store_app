import React from 'react'
import { Carousel, Col, Container, Image, Row, Stack } from 'react-bootstrap'
import tenis from '../../src/assets/colecoes/tenis.jpg'
import './Slider.css'
import { ButtonTemplate } from '../../src/button'

export const Slider = () => {
    return (
        <div style={{ backgroundColor: '#F5F5F5' }}>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Container>
                        <Row>
                            <Col xs={6} md={5}>
                                <div style={{ paddingTop: '3rem' }}>
                                    <Stack gap={3} className='mt-5 mb-3'>
                                        <div className="melhores-ofertas">Melhores ofertas personalizadas</div>
                                        <div>
                                            <h1 className='queima'>Queima de stoque Nike 🔥</h1>
                                        </div>
                                        <div className="descricao">Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</div>
                                    </Stack>


                                    <ButtonTemplate nome={'Ver Ofertas'} />
                                </div>
                            </Col>
                            <Col xs={6} md={6}>
                                <Image src={tenis} height={'110%'} fluid />
                            </Col>
                        </Row>
                    </Container>
                    {/* <ExampleCarouselImage text="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    )
}