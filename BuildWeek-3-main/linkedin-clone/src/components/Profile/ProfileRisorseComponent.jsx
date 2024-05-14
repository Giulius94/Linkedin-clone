import React from 'react'
import { Card } from 'react-bootstrap';

export default function ProfileRisorseComponent() {
    return (
        <>
            <Card className="my-2">
                <Card.Body>
                    <Card.Text>
                        <p className='fs-4 fw-semibold m-0'>Risorse</p>
                        <div className='text-secondary d-flex gap-2'>
                            <i className="bi bi-eye-fill"></i>
                            <p className='m-0'>
                                Solo per te
                            </p>
                        </div>
                        <div className='d-flex gap-2 mt-2'>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                                    <path d="M21 12h-1a9 9 0 00-9-9V2a10 10 0 0110 10zM11 5v1a6 6 0 016 6h1a7 7 0 00-7-7zm3 7h1a4 4 0 00-4-4v1a3 3 0 013 3zm-2 0a1 1 0 00-1.82-.54L5.32 6.6a8 8 0 00-.24 8.4 2.33 2.33 0 014.16.68l.88 3.08A8.57 8.57 0 0012 19a8 8 0 004.4-1.32l-4.86-4.86A1 1 0 0012 12zm-5 3a1.32 1.32 0 00-1.27 1L4 22h6l-1.73-6A1.32 1.32 0 007 15z"></path>
                                </svg>
                            </div>
                            <div>
                                <p className='m-0 fw-semibold'>
                                    Modalità creazione di contenuti
                                </p>
                                <p className='m-0'>
                                    Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione.
                                </p>
                            </div>
                        </div>
                        <hr />
                        <div className='d-flex gap-2 mt-2'>
                            <div>
                                <i className="bi bi-people-fill"></i>
                            </div>
                            <div>
                                <p className='m-0 fw-semibold'>
                                    La mia rete
                                </p>
                                <p className='m-0'>
                                    Salva e gestisci i tuoi collegamenti e interessi.
                                </p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted fw-semibold text-center bg-white">
                    <span>Mostra tutte le risorse (5) </span>
                    <i className="bi bi-arrow-right"></i>
                </Card.Footer>
            </Card>
        </>
    )
}


