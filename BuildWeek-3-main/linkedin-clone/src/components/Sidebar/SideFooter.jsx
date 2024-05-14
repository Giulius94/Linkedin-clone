import React from 'react'
import { Dropdown, ListGroup } from 'react-bootstrap'


export default function SideFooter() {
  return (
    <div className='mt-3 text-center'>
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
  )
}
