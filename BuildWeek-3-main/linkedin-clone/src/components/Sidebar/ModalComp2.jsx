import { useState } from 'react';
import { Button, Modal, Card } from 'react-bootstrap';


function ModalComp({utenti}) {
    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <Button variant='link' className='text-decoration-none w-100 text-black p-0 hoverBtn' onClick={() => setLgShow(true)}>Mostra tutto </Button>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Persone che potresti conoscere
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card style={{ width: '18rem' }} className='mt-2 w-100 border-0'>
                        <Card.Body>
                        {utenti && utenti
                            .slice()
                            .sort(() => Math.random() - 0.5)
                            .slice(0, 10)
                            .map((e, index) => 
                            <>
                                <div class="d-flex">
                                    <img class='imgCircle' src={e.image} />
                                    <div class="d-flex flex-column ms-2 w-75">
                                        <Card.Text className='fw-bold my-0'>
                                            {e.name} {e.surname}
                                        </Card.Text>
                                        <Card.Text class="align-self-start w-100 mb-2">
                                            {e.title}
                                        </Card.Text>
                                        <Button variant="outline-dark" className='rndCircle w-25'><i class="bi bi-person-plus-fill"></i> Collegati</Button>
                                    </div>
                                </div>
                                <hr />
                            </>
                            )}
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ModalComp;
