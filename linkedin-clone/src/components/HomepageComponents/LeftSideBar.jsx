import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {fetchNavUser} from '../../redux/slice/NavUserSlice';

export default function LeftSideBar() {

    const utente = useSelector(state => state.navUser.navUser)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNavUser());
        }, [dispatch]);

    return (
        <>
            <Card>
                <div class='position-relative'>
                    <Card.Img variant="top" className='imgLeftSideBar' src="https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg" />
                    <img src={utente.image} alt="profile-img" style={{ height: "5em", width: "5em" }}
                        className='rounded-circle position-absolute top-100 start-50 translate-middle border border-white border-3'
                    />
                </div>
                <Card.Body>
                    <Card.Title className='mt-5 text-center'>{utente.name} {utente.surname}</Card.Title>
                    <Card.Text className='text-center text-secondary mt-1'>
                        {utente.title}
                    </Card.Text>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item variant='ligth d-flex justify-content-between align-items-center flex-wrap p-4'>
                        <Button variant='nav-link outline-secondary' className='text-secondary dropFont p-0'>Visitatori del Profilo</Button><span className='text-primary fw-bold'>19</span>
                        <Button variant='nav-link outline-secondary' className='text-secondary dropFont p-0'>Impressioni del Post</Button><span className='text-primary fw-bold'>33</span>
                    </ListGroup.Item>
                    <ListGroup.Item action variant='ligth d-flex justify-content-between align-items-center flex-wrap'>
                        <p className='m-0 text-secondary'>Cerca lavoro in modo più smart con Premium</p>
                        <a href="#" className='text-decoration-none text-black fw-bold'><i className="bi bi-square-fill text-warning me-2"></i>Prova per 0€</a>
                    </ListGroup.Item>
                    <ListGroup.Item action variant='ligth d-flex justify-content-between align-items-center flex-wrap'>
                        <p className='m-0 text-secondary fw-bold'><i className="bi bi-bookmark-fill me-2 fw-bold"></i>I miei elementi</p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
            <Card className='mt-2'>
                <Card.Body className='pb-0'>
                <ul className='p-0'>
                    <li className='listLeftSideBar mb-2'>
                        <a href="" className='text-decoration-none fw-bold '>Gruppi</a>
                    </li>
                    <li className='d-flex justify-content-between align-items-center mb-2'>
                        <a href="" className='text-decoration-none fw-bold'>Eventi</a><span><i className="bi bi-plus-circle-fill fs-5 text-secondary"></i></span>
                    </li>
                    <li className='listLeftSideBar m-0'>
                        <a href="" className='text-decoration-none fw-bold'>Hashtag seguiti</a>
                    </li>
                </ul>
                </Card.Body>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item action variant='ligth'>
                        <p className='text-center m-1 fw-bold text-secondary'>Scropri di più</p>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}
