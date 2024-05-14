import React from 'react'
import { Button, Card, Nav, Row, Col } from 'react-bootstrap';
import LogoEpicode from '../../assets/img/Logo_Epicode.jpeg'
import LogoIfoa from '../../assets/img/Logo_IFOA.jpeg'

export default function ProfileInteressiComponent() {
    return (
        <Card className='w-100'>
            <Card.Header className='bg-white'>
                <p className='fs-4 fw-semibold my-2'>Interessi</p>
                <Nav variant="tabs" defaultActiveKey="#first" className='mt-3'>
                    <Nav.Item>
                        <Nav.Link href="#first">Aziende</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Scuole o università</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <div className='d-flex gap-2'>
                            <img src={LogoEpicode} style={{ width: '50px', height: '50px' }} />
                            <div>
                                <Card.Title>EPICODE</Card.Title>
                                <Card.Text>12.934 follower</Card.Text>
                                <Button
                                    variant='outline-secondary'
                                    className='rounded-pill border-2 fw-semibold'
                                >
                                    <i className="bi bi-check2"></i>
                                    <span> Già segui</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className='d-flex gap-2'>
                            <img src={LogoIfoa} style={{ width: '50px', height: '50px' }} />
                            <div>
                                <Card.Title>IFOA</Card.Title>
                                <Card.Text>6.221 follower</Card.Text>
                                <Button
                                    variant='outline-secondary'
                                    className='rounded-pill border-2 fw-semibold'
                                >
                                    <i className="bi bi-check2"></i>
                                    <span> Già segui</span>
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutti gli interessi </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}