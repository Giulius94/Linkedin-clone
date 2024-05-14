import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProfileCorsiComponent() {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-4 m-0 fw-semibold'>Corsi</p>
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

                <div className='mt-3'>
                    <p className='fw-semibold'>
                        Corso sicurezza sul lavoro
                    </p>
                    <hr />
                    <p className='fw-semibold'>
                        Corso informatica base
                    </p>
                </div>

            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutti i corsi </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}