import { useState } from 'react'
import { Card, Button, Modal, Form } from 'react-bootstrap'
import ModalPost from '../ModalPost';
export default function ProfileAttivitaComponent() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        console.log("close modal");
        setShowModal(false);
        
    }
    const handleShowModal = () => {
        console.log("show modal");
        setShowModal(true);
    }

    /*const [attivita, setAttivita] = useState(null);

    useEffect(() => {
        
    })*/

    return (
        <Card className="my-2">
            <Card.Body>
                <div className='d-flex justify-content-between'>
                    <div>
                        <p className='fs-4 fw-semibold mb-0'>Attività</p>
                        <p className='fs-6 text-primary fw-semibold'>150 follower</p>
                    </div>
                    <div>
                        <Button
                            onClick={handleShowModal}
                            variant='outline-primary'
                            className='rounded-pill border-2 fw-semibold'>
                            Crea un post
                        </Button>
                        <ModalPost show={showModal} onHide={handleCloseModal} handleCloseModal={handleCloseModal} />
                        <Button
                            variant="outline-secondary"
                            className='rounded-circle ms-2 border-0'
                            onClick={handleShow}
                        >
                            <i className="bi bi-pencil"></i>
                        </Button>

                        <Modal show={show} onHide={handleClose} centered>
                            <Modal.Header closeButton>
                                <Modal.Title className='fs-5'>
                                    Quali contenuti vuoi mostrare per primi?
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                La tua attività recente mostrerà solo i contenuti degli ultimi 360 giorni.
                                <Form className='mt-3'>
                                    <Form.Check type='radio' label="Post" name="content-type" />
                                    <Form.Check type='radio' label="Commenti" name="content-type" />
                                    <Form.Check type='radio' label="Video" name="content-type" />
                                    <Form.Check type='radio' label="Immagini" name="content-type" />
                                    <Form.Check type='radio' label="Articoli" name="content-type" />
                                    <Form.Check type='radio' label="Newsletter" name="content-type" />
                                    <Form.Check type='radio' label="Eventi" name="content-type" />
                                    <Form.Check type='radio' label="Documenti" name="content-type" />
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="primary" className='rounded-pill' onClick={handleClose}>
                                    Salva
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
                <div className='d-flex gap-2 mt-2'>
                    <div>
                        <p className='m-0 fw-semibold'>Non hai ancora pubblicato nulla</p>
                        <p className='m-0'>I post che condividi appariranno qui</p>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted fw-semibold text-center bg-white">
                <span>Mostra tutte le attività </span>
                <i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}