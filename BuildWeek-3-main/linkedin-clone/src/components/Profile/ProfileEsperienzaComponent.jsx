import { Button, Card, Dropdown, Modal, Form } from 'react-bootstrap';
import EsperienzaDettaglioComponent from './EsperienzaDettaglioComponent'
import '../../assets/css/MainProfileStyle.css'
import { MdOutlineWork, MdCalendarMonth } from "react-icons/md";
import React, { useEffect, useState } from 'react';
import { apiKey } from '../../api';


export default function ProfileEsperienzaComponent({ experience, profileId, updateMyProfile }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [postContent, setPostContent] = useState({
        role: experience.role,
        area: experience.area,
        company: experience.company,
        description: experience.description,
        startDate: experience.startDate,
        endDate: experience.endDate,
       
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPostContent(prevState => { 
            const newPost = {...prevState, [name]: value };
            console.log('NEW POST from set:', newPost);
            return newPost
    });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postEsperienza(profileId);
        handleClose();
    };

    function postEsperienza(id){
        fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,{
            method: 'POST',
            headers: {
              'Authorization': `${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(postContent),
          })
          .then(response => response.json())
          .then(data => {
            console.log("POST esperienza fetch:", data);
            updateMyProfile();
            
            
            
         })
         .catch(error=> console.error(error))
    }




    
    return (
        <Card className='my-2 w-100'>
            <Card.Body>
                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-4 fw-semibold m-0'>Esperienza</p>
                    <div className='d-flex'>
                        <Dropdown>
                            <Dropdown.Toggle
                                className='rounded-circle border-0 bg-white text-secondary custom-dropdown-toggle'
                            >
                                <i className="bi bi-plus"></i>
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className='text-secondary' onClick={()=> handleShow()}>
                                    <MdOutlineWork />
                                    <span> Aggiungi posizione lavorativa</span>
                                </Dropdown.Item>
                                <Dropdown.Item className='text-secondary'>
                                    <MdCalendarMonth />
                                    <span> Aggiungi pausa lavorativa</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border-0'
                        >
                            <i className="bi bi-pencil"></i>
                        </Button>
                    </div>
                </div>

                {experience.length > 0  ? (
                    experience.map((exp, key) => (
                    <EsperienzaDettaglioComponent 
                    posizione={exp.role} 
                    azienda={exp.company} 
                    luogo={exp.area} 
                    descrizione={exp.description} 
                    startDate={exp.startDate}
                    endDate={exp.endDate}
                    />))
                    ) 
                    : (<h4>Nessuna Esperienza :/ </h4>)}
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le esperienze </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
                     
                    
                    <Modal size="lg" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Aggiungi esperienza</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            className="overflow-y-scroll"
                            style={{ height: "500px" }}
                        >
                            <Form className="container " onSubmit={handleSubmit}>
                                <p class="form-text negative-margin">
                                    * Indica che è obbligatorio
                                </p>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 mb-0 form-text "
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Qualifica*
                                    </Form.Label>
                                    <Form.Control
                                        name='role'
                                        value={postContent.role}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Nome azienda
                                    </Form.Label>
                                    <Form.Control
                                        name='company'
                                        value={postContent.company}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                       Località
                                    </Form.Label>
                                    <Form.Control
                                        name='area'
                                        value={postContent.area}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Descrizione*
                                    </Form.Label>
                                    <Form.Control
                                        name='description'
                                        value={postContent.description}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Data di inizio *
                                    </Form.Label>
                                    <Form.Control
                                        name='startDate'
                                        value={postContent.startDate}
                                        onChange={handleChange}
                                        type="date"
                                        placeholder="Mese"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Data di fine*
                                    </Form.Label>
                                    <Form.Control
                                        name='endDate'
                                        value={postContent.endDate}
                                        onChange={handleChange}
                                        type="date"
                                        placeholder="Mese"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                               
                                
                                                                
                                <h4 className="pt-3" style={{ fontSize: "1.4em" }}>
                                    Posizione attuale
                                </h4>
                                <button
                                    type="button"
                                    style={{ fontWeight: "600", fontSize: "1.1em" }}
                                    class="btn text-primary mt-2"
                                >
                                    <i class="bi bi-plus"></i>Aggiungi una nuova posizione
                                    lavorativa
                                </button>
                                
                                <p style={{ fontSize: "1.2em" }} className="form-text">
                                    Scopri di più sulle{" "}
                                    <a
                                        href="https://www.esempio.com"
                                        style={{ textDecoration: "none" }}
                                    >
                                        opzioni relative al settore
                                    </a>
                                </p>
                                
                                


                                <Modal.Footer>
                            <Button type="submit" variant="primary" >
                                Salva
                            </Button>
                        </Modal.Footer>
                            </Form>
                        </Modal.Body>
                        
                    </Modal>
        </Card>
    )
}
