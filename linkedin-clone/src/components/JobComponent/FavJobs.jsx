import React from 'react'
import { IoBookmarkSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux'
import { removeFavourite } from '../../redux/slice/JobsSlice'
import { Row , Col } from 'react-bootstrap'

export default function FavJobs() {

    const dispatch = useDispatch()
    const favJobs = useSelector(state => state.favourites.favourites)
    console.log(favJobs);

    return (
        <>
            <div className='mt-4'>
                <div
                    className='bg-light pt-4 pb-3 pe-3 ps-3 rounded-4'
                    style={{
                        border: "1px solid #DFDEDA",
                    }}>
                    <ul className='list-unstyled'>
                        {favJobs && favJobs.map((favJob) =>
                            <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{ color: '#404040' }} key={favJob._id}>

                                <Row className='menuJob fw-semibold my-0 row'>
                                    <Col className='col-1'><IoBookmarkSharp className='me-3 my-0 ' /></Col>
                                    <Col className='col'>{favJob.title}</Col>
                                    <Col className='col-1 me-3'><i onClick={() => dispatch(removeFavourite(favJob))} className="bi bi-trash-fill "></i></Col>
                                </Row>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}
