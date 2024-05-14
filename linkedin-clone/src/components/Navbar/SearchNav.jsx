import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import Logo from '../../assets/logo.png';
import { Typeahead } from 'react-bootstrap-typeahead';
import { useDispatch, useSelector } from 'react-redux'
import { fetchJobs } from '../../redux/slice/JobsSlice'
import { Link  } from 'react-router-dom';

export default function SearchNav() {
  const [query, setQuery] = useState('');
  const jobsResponse = useSelector(state => state.jobs.jobs)
  console.log(jobsResponse);
  const dispatch = useDispatch()

  const handleSearch = (e) => {
    // Aggiorna la query quando l'utente seleziona un'opzione
    /*if (e.key === 'Enter') {*/
      setQuery(e.target.value);
      dispatch(fetchJobs(query))
    //}
  }

  useEffect(() => {
    dispatch(fetchJobs(query))
  }, [dispatch])

  return (
    <div className='d-flex justify-content-between align-items-center my-0 py-0'>
      <Link to='/'>
      <img src={Logo} alt="logo" className='me-2' style={{ width: '2rem' }} />
      </Link>
      <div
        className='d-flex justify-content-between align-items-center rounded-1 '
        style={{ background: '#EDF3F8', border: 'none' }}>
        <Form.Group className='d-flex typeaheadTest' >
          {jobsResponse &&
            <Typeahead
              className='position-relative typeaheadTest'
              id="basic-typeahead-single"
              onKeyDown={handleSearch}
              placeholder='🔍 Cerca un lavoro...'
              options={jobsResponse.map((job) => job.title)}
              onChange={handleSearch}
              onSubmit={handleSearch}
            />}

        </Form.Group>
      </div>
    </div>
  )
}