import { useState, useRef } from 'react';
import { Button, Card, Collapse, Dropdown, ListGroup } from 'react-bootstrap'
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';

export default function RightSideBar() {

    const [show, setShow] = useState(false);
    const target = useRef(null);
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card className='w-100 p-0'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Card.Title className='fs-6 fw-bold m-0'>LinkedIn Notizie</Card.Title>
                        <Button variant='nav-link' className='pt-0' ref={target} onClick={() => setShow(!show)}>
                            <i class="bi bi-info-square-fill"></i>
                        </Button>
                        <Overlay target={target.current} show={show} placement="left">
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Queste sono le principali notizie e conversazioni del giorno. Scopri come vengono selezionate.
                                </Tooltip>
                            )}
                        </Overlay>
                    </div>
                    <Card.Text>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>I 15 lavori in più rapida crescita in  Italia</a>
                                        <p className='text-secondary'>Notizie Principali • 275 lettori</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant='ligth p-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>CEO in prima pagina</a>
                                        <p className='text-secondary'>23h fa</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                            <ListGroup.Item action variant='ligth p-0 mb-0'>
                                <ul>
                                    <li>
                                        <a href="" className='text-decoration-none text-dark fw-bold'>Turismo in ripresa con l'e-commerce</a>
                                        <p className='text-secondary mb-0'>18h fa</p>
                                    </li>
                                </ul>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card.Text>
                    <div id="collapse-right">
                        <Collapse in={open}>
                            <div>
                                <hr className='m-0 p-0 text-secondary' />
                                <ListGroup className='list-group-flush p-0'>
                                    <ListGroup.Item action variant='ligth p-0'>
                                        <ul>
                                            <li>
                                                <a href="" className='text-decoration-none text-dark fw-bold'>Che 2023 per il mercato?</a>
                                                <p className='text-secondary'>Bitcoin in discesa</p>
                                            </li>
                                        </ul>
                                    </ListGroup.Item>
                                    <ListGroup.Item action variant='ligth p-0'>
                                        <ul>
                                            <li>
                                                <a href="" className='text-decoration-none text-dark fw-bold'>Silvia Galaxy(semplicemente Silvia)</a>
                                                <p className='text-secondary'>Lite furibonda con Zucchi Sara, come difendere se stessi.</p>
                                            </li>
                                        </ul>
                                    </ListGroup.Item>
                                </ListGroup>
                            </div>
                        </Collapse>
                        <Button
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                            className='nav-link text-center'
                            variant='light'
                        >
                            Mostra altro
                        </Button>
                    </div>
                </Card.Body>
            </Card>
            <Card className='mt-2'>
                <Card.Img src="https://citynews-reggiotoday.stgy.ovh/~media/horizontal-hi/3284318627482/il-mac-64.jpg" className='imgRightSideBar' />
            </Card>

            <div className='mt-3'>
                <ul className='listLeftSideBar d-flex flex-wrap justify-content-evenly align-items-center'>
                    <li><a href="#" className='text-decoration-none text-secondary'>Informazioni</a></li>
                    <li><a href="#" className='text-decoration-none text-secondary'>Accessibilità</a></li>
                    <li><a href="#" className='text-decoration-none text-secondary'>Centro assistenza</a></li>
                    <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className='text-decoration-none text-secondary dropFont p-0'>
                        Privacy e condizioni
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Informativa sulla privacy</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Contratto di licenza</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Termini e condizioni delle pagine</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Informativa sui cookie</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Informativa sui copyright</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    <li><a href="#" className='text-decoration-none text-secondary'>Opzioni per gli annunci pubblicitari</a></li>
                    <li><a href="#" className='text-decoration-none text-secondary'>Pubblicità</a></li>
                    <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className='text-decoration-none text-secondary dropFont p-0 mx-1'>
                        Servizi per le aziende
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Assumi su LinkedIn
                                <p className='text-secondary fw-normal'>Trova, attrai e assumi</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Vendi con LinkedIn
                                <p className='text-secondary fw-normal'>Sblocca nuove opportunità di vendita</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Offerta di lavoro gratuita
                                <p className='text-secondary fw-normal'>Raggiungi i migliori candidati con la tua offerta di lavoro</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Fai pubblicità su LinkedIn
                                <p className='text-secondary fw-normal'>Acquisisci clienti e fai crescere la tua azienda</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Impara con LinkedIn
                                <p className='text-secondary fw-normal'>Corsi per formare i tuoi dipendenti</p>
                            </ListGroup.Item>
                        </ListGroup>
                        <ListGroup className='list-group-flush p-0'>
                            <ListGroup.Item action variant='ligth p-0' className='fw-bold'>
                                Centro amministrazione
                                <p className='text-secondary fw-normal'>Gestisci dettagli di fatturazione e account</p>
                            </ListGroup.Item>
                        </ListGroup>
                        </Dropdown.Item>
                        
                    </Dropdown.Menu>
                    </Dropdown>
                    <li><a href="#" className='text-decoration-none text-secondary'>Scarica l'app LinkedIn</a></li>
                    <li><a href="#" className='text-decoration-none text-secondary'>Altro</a></li>
                </ul>
                <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr" alt="linkedin logo" className='ms-5 me-1' /><span>Team 1 Epicode © 2024</span>
            </div>

        </>
    )
}
