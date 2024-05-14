import React from 'react'
import { Container } from 'react-bootstrap'
import { IoBookmarkSharp } from "react-icons/io5";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoIosSettings } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";
import { BsClipboard2Check } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { LiaEditSolid } from "react-icons/lia";
import SideFooter from '../components/Sidebar/SideFooter'
import JobCard from '../components/JobComponent/JobCard'
import FavJobs from '../components/JobComponent/FavJobs'

export default function JobPage() {
  return (
    <Container>
      <div className='row mt-4'
        style={{
          width: '87%',
          margin: 'auto',
        }}>
        <div className='col-3 pe-4'>
          {/*Menù laterale JobPage*/}
          <div
            className='bg-light pt-4 pb-3 pe-3 ps-3 rounded-4'
            style={{
              border: "1px solid #DFDEDA",
            }}>
            <ul className='list-unstyled'>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{ color: '#404040' }}>
                <IoBookmarkSharp className='me-3 fs-5 my-0' />
                <p className='menuJob fw-semibold my-0'>
                  Le mie offerte di lavoro
                </p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{ color: '#404040' }}>
                <TfiMenuAlt className='me-3 fs-5 my-0' />
                <p className='menuJob fw-semibold my-0'>Preferenze</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{ color: '#404040' }}>
                <BsClipboard2Check className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Valutazione delle competenze</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu mb-4 d-flex align-items-center' style={{ color: '#404040' }}>
                <IoLogoYoutube className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Indicazioni per chi cerca lavoro</p>
              </li>
              <li as={Link} to='#' className='linkJobMenu d-flex align-items-center' style={{ color: '#404040' }}>
                <IoIosSettings className='me-3 fs-4 my-0' />
                <p className='menuJob fw-semibold my-0'>Impostazioni candidatura</p>
              </li>
            </ul>
          </div>
          {/*Pulsante Laterale JobPage*/}
          <div
            className='buttonJobMenu as={Link} to="#" mt-3 fw-semibold px-4 py-2 d-flex align-items-center justify-content-center'
            style={{ width: '100%', borderRadius: '26px' }}>
            <LiaEditSolid className='me-4 fs-3 my-0' />
            <span className='menuJob text-center'>Pubblica offerta gratuita</span>
          </div>
          {/* Favourite Jobs Card */}
          <FavJobs />
          {/* Favourite Jobs Card */}
        </div>

        

        <div className='col-6 mb-5'>
          <div className='px-3 pt-4 bg-light pe-3 ps-3 rounded-4'
            style={{
              border: "1px solid #DFDEDA",
            }}>
            <h4 className='mb-0' style={{ fontSize: '1.1em' }}>Selezione in corso</h4>
            <p style={{ color: '#707070' }}>Offerte di lavoro che potrebbero esserti sfuggite</p>

            {/*oggetto da mappare*/}
            <JobCard />
            {/*fine oggetto da mappare*/}
          </div>
        </div>
        <div className='col-3'>
          <SideFooter />
        </div>
      </div>
    </Container>
  )
}
