import React from 'react'
import { Button, Card } from 'react-bootstrap';

export default function ProfileCompetenzeComponent() {
    return (
        <Card className='my-2 w-100'>
            <Card.Body>

                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-4 fw-semibold m-0'>Competenze</p>
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
                    <h4 className='fs-5'>
                        Competenza 1
                    </h4>
                    <hr />
                    <h4 className='fs-5'>
                        Competenza 2
                    </h4>
                    <hr />
                    <h4 className='fs-5'>
                        Competenza 3
                    </h4>
                </div>

            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le competenze </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}