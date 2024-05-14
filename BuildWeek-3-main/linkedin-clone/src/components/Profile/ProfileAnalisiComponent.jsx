import React from 'react'
import Card from 'react-bootstrap/Card';

export default function ProfileAnalisiComponent() {
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Text>
                    <p className='fs-4 fw-semibold mb-0'>Analisi</p>
                    <div className='text-secondary d-flex gap-2'>
                        <i className="bi bi-eye-fill"></i>
                        <p className='m-0'>
                            Solo per te
                        </p>
                    </div>
                    <div className='d-flex gap-2 mt-2'>
                        <div>
                            <i className="bi bi-people-fill"></i>
                        </div>
                        <div>
                            <p className='m-0 fw-semibold'>
                                37 visualizzazioni del profilo
                            </p>
                            <p className='m-0'>
                                Scopri chi ha visitato il tuo profilo.
                            </p>
                        </div>
                    </div>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le analisi </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}


