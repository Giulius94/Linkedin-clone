import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProfileFormazioneComponent() {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-4 fw-semibold m-0'>Formazione</p>
                    <div>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle border-0'
                        >
                            <i className="bi bi-plus"></i>
                        </Button>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border-0'
                        >
                            <i className="bi bi-pencil "></i>
                        </Button>
                    </div>
                </div>
                <div className='d-flex gap-2 mt-3'>
                    <div
                        style={{ width: '50px', height: '50px' }}
                        className='d-flex justify-content-center align-items-center'
                    >
                        <i className="bi bi-buildings fs-2"></i>
                    </div>
                    <div>
                        <p className='fs-5 m-0 fw-semibold'>
                            Istituto
                        </p>
                        <p className='fs-6 m-0'>
                            Titolo di studio
                        </p>
                        <p className='m-0 text-secondary'>
                            Periodo &#183; Città, Regione, Paese
                        </p>
                        <p className='m-0'>
                            Descrizione
                        </p>
                        <p className='m-0'>
                            <i className="bi bi-gem"></i>
                            <span> Competenze</span>
                        </p>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutti i titoli di studio </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}