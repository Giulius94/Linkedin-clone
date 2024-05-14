import { useState } from 'react';
import { Button , Card , ListGroup , Offcanvas } from 'react-bootstrap';

import { LuFileBarChart2 } from "react-icons/lu";
import { BsPlayBtnFill } from "react-icons/bs";
import { ImClipboard } from "react-icons/im";
import { PiTargetBold } from "react-icons/pi";
import { FaCompass } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi";
import { ImCheckmark } from "react-icons/im";
import { FaPlus } from "react-icons/fa";

export default function OffCanvNavbar({ name , ...props }) {

  return (
    <>
      <Offcanvas placement='end' {...props}> {/* Placemennt start, end , top, bottom per far comparire l'offcanvas  */}
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Per le aziende</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className='my-3'>
          {/* Prima card  */}
          <Card className='ms-3' style={{ width: '20rem' }}>
            <Card.Header className='fw-bold'>Scopri altri prodotti Linkedin</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item className='m-1 my-2'>
              <div className='d-inline-block text-wrap mx-1'>
                <Button variant="outline-secondary mb-2"><BsPlayBtnFill className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Learning</p>
              </div>
              <div className='d-inline-block'>
                <Button variant="outline-secondary mb-2  mx-1"><LuFileBarChart2 className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Talent</p>
              </div>
              <div className='d-inline-block'>
                <Button variant="outline-secondary mb-2 mx-1"><ImClipboard className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Offerte</p>
              </div>
              <div className='d-inline-block'>
                <Button variant="outline-secondary mb-2 mx-1"><PiTargetBold className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Pubblicizza</p>
              </div>
              <div className='d-inline-block'>
              <Button variant="outline-secondary mb-2 mx-1"><FaCompass className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Vendi</p>
              </div>
              <div className='d-inline-block'>
                <Button variant="outline-secondary mb-2 mx-1"><HiUserGroup className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Gruppi</p>
              </div>
              <div className='d-inline-block'>
                <Button variant="outline-secondary mb-2 mx-1"><ImCheckmark className='text-primary fs-2'/></Button>{' '}
                <p className='fontTitleOffcanvas text-break word-wrap'>Marketplace</p>
              </div>
              </ListGroup.Item>
            </ListGroup>
          </Card>
          {/* Seconda card  */}
          <Card className='ms-3' style={{ width: '20rem' }}>
            <Card.Header className='fw-bold'>Scopri altro per il business</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Assumi su LinkedIn </li>
                  <span className='fontTitleOffcanvas'> Trova,attrai e assumi </span>
                </ul>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Vendi con Linkedin </li>
                  <span className='fontTitleOffcanvas'> Sblocca nuove opportunità di vendita </span>
                </ul>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Offerta di lavoro gratuita </li>
                  <span className='fontTitleOffcanvas'> Ottieni rapidamente candidati qualificati </span>
                </ul>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Fai pubblicitù su Linkedin </li>
                  <span className='fontTitleOffcanvas'> Acquisisci clienti e fai crescere la tua azienda </span>
                </ul>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Impara con Linkedin </li>
                  <span className='fontTitleOffcanvas'> Corsi per formare i tuoi dipendenti </span>
                </ul>
                <ul className='divListOffcanvas'>
                  <li className='listaOffcanvas fs-6'> Centro amministrazione </li>
                  <span className='fontTitleOffcanvas'> Gestisci i dettagli di fatturazione e account </span>
                </ul>
              </ListGroup.Item>
              <ListGroup.Item className='fs-6'>Crea una pagina aziendale <FaPlus /></ListGroup.Item>
            </ListGroup>
          </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
