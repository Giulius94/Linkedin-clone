import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Button, Card, Collapse, Form, Modal } from 'react-bootstrap';
import { FaPlus } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { BiCommentDetail } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import { FcLike } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { PiHandsClapping } from "react-icons/pi";
import { FaRegSmile } from "react-icons/fa";
import { SlPicture } from "react-icons/sl";
import LoadingSpinner from "../../LoadingSpinner";
import ImageApi from './ImageApi';
import { fetchNavUser } from '../../../redux/slice/NavUserSlice';

export default function PostHomepageCenter({ post }) {

    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI4ZmZiNTg5OWIxZDAwMTlhNDFkYjMiLCJpYXQiOjE3MDY2MjI5MDEsImV4cCI6MTcwNzgzMjUwMX0.7micrqTTUiYbSqDGi5D2PWGTlb_FVfLBVu7n4ymdiqY';

    const [post2, setPost2] = useState({
        text: '',
    });

    const [postUser, setPostUser] = useState([]);

    const utente = useSelector(state => state.navUser.navUser)
    const dispatch = useDispatch()

    function postPosts(file) {
        fetch("https://striveschool-api.herokuapp.com/api/posts/", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post2),
        })
            .then(response => response.json())
            .then(data => {
                console.log("Post creato:", data);
                if (data._id) {
                    addImageToPost(data._id, file); // Passa l'ID del post e il file a addImageToPost
                }
            })
            .catch(error => {
                console.error("Errore nella creazione del post:", error);
            });
    }

    function addImageToPost(postId, file) {
        const formData = new FormData();
        formData.append('post', file);

        fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                console.log("Immagine aggiunta al post:", data);
            })
            .catch(error => {
                console.error("Errore nell'upload dell'immagine:", error);
            });
    }

    useEffect(() => {
        postListUser();
    }, [])


    function postListUser() {
        fetch("https://striveschool-api.herokuapp.com/api/posts/", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log("THIS IS POST LIST:", data);
                const postsByUser = data.filter(x => x.username === "milena");
                setPostUser(postsByUser);

                console.log("POSTS BY USER:", postsByUser);


            })
            .catch(error => {
                console.error(error)
            })

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost2(prevState => {
            const newPost = { ...prevState, [name]: value };
            console.log('NEW POST from set:', newPost);
            return newPost
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const fileInput = document.querySelector('input[name="postImage"]');

        if (fileInput && fileInput.files.length > 0) {
            postPosts(fileInput.files[0]); // Passa il file selezionato alla funzione postPosts
        } else {
            console.log("Seleziona un file prima di pubblicare.");
        }

        handleClose();
        setFake(!fake) 
    };
    useEffect(() => {
        dispatch(fetchNavUser());
    }, [dispatch]);

    const [fake,setFake] = useState(false)

    const [open, setOpen] = useState(false);
    const loading = useSelector(state => state.homepageUser.loading)
    //console.log(loading);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Card className='w-100'>
                <div className='createPost d-flex align-items-center justify-content-around'>
                    <img src={utente.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                        className='rounded-circle border border-white border-3 postHeight'
                    />
                    <Button variant="outline-secondary searchBtn" onClick={handleShow}>Avvia un post</Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton className='border-0'>
                            <div className='createPost d-flex align-items-center'>
                                <img src={utente.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                    className='rounded-circle border border-white border-3 commentImg mx-2'
                                />
                            </div>
                            <Modal.Title>{utente.name} {utente.surname}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Control
                                name='text'
                                value={post2.text}
                                onChange={handleChange}
                                required
                                as="textarea"
                                placeholder="Di cosa vorresti parlare?"
                                className='border-0 h-100'
                                rows={10}
                            />
                        </Modal.Body>
                        <Modal.Footer className='border-0'>
                            <Form.Group className="mb-3">
                                <Form.Label>Allega Immagine</Form.Label>
                                <Form.Control type="file" name="postImage" accept="image/*" className='inputfix' />
                            </Form.Group>
                            <Button variant="secondary" onClick={handleClose}>
                                Chiudi
                            </Button>
                            <Button variant="primary" onClick={handleSubmit}>
                                Pubblica
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className='d-flex align-items-center justify-content-around mb-3'>
                    <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-image text-primary fs-5 me-1"></i> Contenuti multimediali</a>
                    <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-calendar3 text-warning fs-5 me-1"></i> Evento</a>
                    <a href="#" className='text-decoration-none text-secondary fs-6'><i class="bi bi-card-text text-danger fs-5 me-1"></i> Scrivi un articolo</a>
                </div>
            </Card>
            {postUser && postUser
                .slice(-1)
                .slice(0, 1)
                .map(p => (
                    <Card className='w-100 my-2' >
                        <div className='d-flex align-items-center mx-2'>
                            <img src={utente.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                className='rounded-circle border border-white border-3 postHeight'
                            />
                            <div className='w-100 d-flex align-items-center justify-content-between mx-2'>
                                <div className='d-flex flex-column'>
                                    <h6 className='m-0 mt-2'>{p.username}</h6>
                                    <p>{p.createdAt.slice(0, 10)} • <i className="bi bi-globe-asia-australia text-secondary"></i></p>
                                </div>
                                <Button variant="outline-primary" className='border-0 d-flex align-items-center'><FaPlus className='me-1' />Segui</Button>

                            </div>
                        </div>
                        <Card.Body className='p-0 pt-1'>
                            <Card.Text className='px-3'>
                                {p.text}
                            </Card.Text>
                            
                            <Card.Img variant="top" className="rounded-0 imagesize" src={p.image} alt="Unsplash Image" />
                            <div className='d-flex justify-content-between mx-3'>
                                <div>
                                    <AiFillLike className='text-primary' />
                                    <FcLike className='text-danger' />
                                    <PiHandsClapping className='text-success' />
                                </div>
                                <p className='my-1 text-secondary'> {Math.floor(Math.random() * 2000)} commenti • {Math.floor(Math.random() * 2000)} diffusioni post</p>
                            </div>
                            <hr className='mx-2 my-2 text-secondary' />
                            <div className='d-flex flex-row justify-content-around my-1 mx-2'>
                                <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><SlLike className='fs-4 me-1' /> Consiglia</Button>
                                <Button variant="outline-secondary border-0 d-flex align-items-center p-3" onClick={(e) => { e.preventDefault(); setOpen(!open); }}><BiCommentDetail className='fs-4 me-1' /> Commenta</Button>
                                <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><HiMiniArrowPathRoundedSquare className='fs-4 me-1' /> Diffondi il post</Button>
                                <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><IoIosSend className='fs-4 me-1' /> Invia</Button>
                            </div>
                        </Card.Body>

                    </Card>
                ))}


            {loading ? (<div className="d-flex justify-content-center"> <LoadingSpinner /> </div>)
                :
                post && post
                    .slice(5)
                    .sort(() => Math.random() - 0.5)
                    .slice(5, 10)
                    .map((e, index) =>
                        <>
                            <Card className='w-100 my-2' key={index}>
                                <div className='d-flex align-items-center mx-2'>
                                    <img src={e.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                        className='rounded-circle border border-white border-3 postHeight'
                                    />
                                    <div className='w-100 d-flex align-items-center justify-content-between mx-2'>
                                        <div className='d-flex flex-column'>
                                            <h6 className='m-0 mt-2'>{e.user.name} {e.user.surname}</h6>
                                            <p className='d-inline m-0'>{e.user.title}</p>
                                            <p>{e.createdAt.slice(0, 10)} • <i className="bi bi-globe-asia-australia text-secondary"></i></p>
                                        </div>
                                        <Button variant="outline-primary" className='border-0 d-flex align-items-center'><FaPlus className='me-1' />Segui</Button>

                                    </div>
                                </div>
                                <Card.Body className='p-0 pt-1'>
                                    <Card.Text className='px-3'>
                                        {e.text}
                                    </Card.Text>
                                    <ImageApi img={e.text} />
                                    <div className='d-flex justify-content-between mx-3'>
                                        <div>
                                            <AiFillLike className='text-primary' />
                                            <FcLike className='text-danger' />
                                            <PiHandsClapping className='text-success' />
                                        </div>
                                        <p className='my-1 text-secondary'> {Math.floor(Math.random() * 2000)} commenti • {Math.floor(Math.random() * 2000)} diffusioni post</p>
                                    </div>
                                    <hr className='mx-2 my-2 text-secondary' />
                                    <div className='d-flex flex-row justify-content-around my-1 mx-2'>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><SlLike className='fs-4 me-1' /> Consiglia</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3" onClick={(e) => { e.preventDefault(); setOpen(!open); }}><BiCommentDetail className='fs-4 me-1' /> Commenta</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><HiMiniArrowPathRoundedSquare className='fs-4 me-1' /> Diffondi il post</Button>
                                        <Button variant="outline-secondary border-0 d-flex align-items-center p-3"><IoIosSend className='fs-4 me-1' /> Invia</Button>
                                    </div>
                                </Card.Body>

                                <div>
                                    <Collapse in={open}>

                                        <Card className='w-100 border-0'>
                                            <div className='createPost d-flex align-items-center'>
                                                <img src='https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg' alt="profile-img" style={{ height: "5em", width: "5em" }}
                                                    className='rounded-circle border border-white border-3 commentImg ms-2'
                                                />

                                                <div className='d-flex align-items-center w-100 border rounded-5 mx-2'>
                                                    <Form.Control
                                                        required
                                                        type="text"
                                                        placeholder="Aggiungi un commento..."
                                                        className='w-100 border-0 rounded-5 py-2'
                                                    />
                                                    <FaRegSmile className='me-2 fs-4' />
                                                    <SlPicture className='me-4 fs-4' />
                                                </div>
                                            </div>

                                            <div className='d-flex align-items-center'>
                                                <img src={e.user.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                                                    className='rounded-circle border border-white border-3 commentImg ms-2'
                                                />
                                                <Card.Body className='px-1'>
                                                    <Card.Text className='commentBg p-2 me-2 rounded'>
                                                        <h6 className='my-1'>{e.user.name} {e.user.surname}</h6>
                                                        {e.text}
                                                    </Card.Text>
                                                </Card.Body>
                                            </div>

                                        </Card>
                                    </Collapse>
                                </div>
                            </Card>
                        </>
                    )}
        </>
    )
}
