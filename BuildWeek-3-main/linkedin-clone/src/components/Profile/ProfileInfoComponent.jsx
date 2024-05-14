
import React, { useState } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap';
import '../../assets/css/MainProfileStyle.css'
import { BtnDisponibileComponent } from './BtnDisponibileComponent'
import { BtnAggiungiSezioneComponent } from './BtnAggiungiSezioneComponent';
import { BtnAltroComponent } from './BtnAltroComponent'
import Banner from '../../assets/img/Banner-Profilo-LinkedIn.png'
import { apiKey } from '../../api';
 
export const ProfileInfoComponent = ({ profile, updateMyProfile }) => {
    //const ap = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWIyMmU3OTkxM2Y2NTAwMThkMDk1YmEiLCJpYXQiOjE3MDYxNzYxMjEsImV4cCI6MTcwNzM4NTcyMX0.O1zhA65zNqI-ZmpFBTPAmpGJ-zFueo8cw4ei9XuHWXw';

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [editedData, setEditedData] = useState({
        name: profile.name,
        surname: profile.surname,
        title: profile.title,
        area: profile.area,
        bio: profile.bio
    });

    function editInfo(){
        fetch('https://striveschool-api.herokuapp.com/api/profile/', {method: 'PUT',
        headers: {
          'Authorization': `${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedData),
      })
      .then(response => response.json())
      .then(updatedProfile =>{
        console.log('Updated profile: ', updatedProfile)
        updateMyProfile();
        //qui si potrebbe chiudere lo stato del eventuale modal
      })
      .catch(error=> console.error(error))
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedData(prevData => {
            const newData = { ...prevData, [name]: value };
            console.log('Updated editedData from set:', newData);
            return newData;
          });
    };

    return (
        <Card className='bg-white w-100'>
            <div className='position-relative mb-3'>
                <div className='position-relative'>
                    <Card.Img
                        variant="top"
                        src={Banner}
                        style={{ height: '250px' }}
                        alt="banner-img"
                    />
                    <Button variant="light" className='position-absolute end-0 rounded-circle m-3'>
                        <i className="bi bi-camera-fill text-primary"></i>
                    </Button>
                </div>
                <img
                    src={profile.image}
                    alt="profile-img"
                    style={{ height: "150px", width: "150px" }}
                    className='rounded-circle position-absolute top-100 start-0 translate-middle custom-margin border border-white border-3'
                />
            </div>
            <Card.Body >
                <div className='d-flex justify-content-between align-items-baseline'>
                    <p className='fs-3 fw-semibold mt-5 mb-0'>{profile.name} {profile.surname}</p>
                    <Button
                        variant="outline-secondary"
                        className='rounded-circle border-0'
                        onClick={handleShow}
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                    <Modal size="lg" show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>Modifica presentazione</Modal.Title>
                        </Modal.Header>
                        <Modal.Body
                            className="overflow-y-scroll"
                            style={{ height: "500px" }}
                        >
                            <Form className="container " onSubmit={(e) => { e.preventDefault(); editInfo(); handleClose();}}>
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
                                        Nome*
                                    </Form.Label>
                                    <Form.Control
                                        name='name'
                                        value={editedData.name}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3 mt-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Cognome*
                                    </Form.Label>
                                    <Form.Control
                                        name='surname'
                                        value={editedData.surname}
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
                                        Nome aggiuntivo
                                    </Form.Label>
                                    <Form.Control
                                        name='title'
                                        value={editedData.title}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <p className="form-text pt-4 mb-1">Pronuncia del nome</p>
                                <p className="mb-1">
                                    Può essere aggiunta solo usando la nostra app per dispositivi
                                    mobili
                                </p>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Inserisci pronomi personalizzati
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="----"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                    <div id="emailHelp" class="form-text">
                                        Indica i pronomi di genere che vuoi che gli altri usino per
                                        riferirsi a te.
                                    </div>
                                </Form.Group>
                                <p>
                                    Scopri di più sui{" "}
                                    <a href="#" style={{ textDecoration: "none" }}>
                                        pronomi di genere.
                                    </a>
                                </p>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Sommario*
                                    </Form.Label>
                                    <Form.Control
                                        name='bio'
                                        value={editedData.bio}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
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
                                <Form.Group
                                    className="mb-2 mt-2"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Settore* -image url-
                                    </Form.Label>
                                    <Form.Control
                                    name='image'
                                    value={editedData.image}
                                    onChange={handleChange}
                                        type="text"
                                        placeholder="Es.: Commercio al dettaglio"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <p style={{ fontSize: "1.2em" }} className="form-text">
                                    Scopri di più sulle{" "}
                                    <a
                                        href="https://www.esempio.com"
                                        style={{ textDecoration: "none" }}
                                    >
                                        opzioni relative al settore
                                    </a>
                                </p>
                                <h4 className="mb-3">Formazione</h4>
                                <button
                                    type="button"
                                    style={{ fontWeight: "600", fontSize: "1.1em" }}
                                    className="btn text-primary "
                                >
                                    <i class="bi bi-plus"></i>Aggiungi un nuovo grado di
                                    formazione
                                </button>
                                <h4 className="mt-5">Località</h4>
                                <Form.Group
                                    className="mb-3 negative-margin"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        Paese/Area geografica*
                                    </Form.Label>
                                    <Form.Control
                                        name='area'
                                        value={editedData.area}
                                        onChange={handleChange}
                                        type="text"
                                        placeholder="--"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3 mt-3"
                                    controlId="exampleForm.ControlInput1"
                                >
                                    <Form.Label
                                        className="mt-3 form-text mb-0"
                                        style={{ fontSize: "1.0em" }}
                                    >
                                        CAP
                                    </Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="------"
                                        autoFocus
                                        style={{ borderColor: "black" }}
                                    />
                                </Form.Group>

                                <p className="pt-4 mb-0 pb-0" style={{ fontSize: "1.4em" }}>
                                    Informazioni di contatto
                                </p>
                                <p className="pb-2">
                                    Aggiungi o modifica il tuo profilo URL, indirizzo email e
                                    altro
                                </p>
                                <button type="button" class="btn text-primary" >
                                    Modifica le informazioni di contatto
                                </button>
                                <Modal.Footer>
                            <Button type="submit" variant="primary" >
                                Salva
                            </Button>
                        </Modal.Footer>
                            </Form>
                        </Modal.Body>
                        
                    </Modal>
                </div>
                <Card.Text>
                    <p className='m-0'>{profile.title}</p>
                    <p className='m-0 text-secondary'>{profile.area} &#183;
                        <span className='link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover fw-semibold'> Informazioni di contatto</span>
                    </p>
                    <p className='m-0 fw-semibold text-primary'>
                        150 collegamenti
                    </p>
                </Card.Text>
                <div className='d-flex gap-3'>
                    <BtnDisponibileComponent />
                    <BtnAggiungiSezioneComponent />
                    <BtnAltroComponent />
                </div>
            </Card.Body>
        </Card>
    )
}