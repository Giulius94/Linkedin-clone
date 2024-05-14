import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { SideBarComponent } from '../components/SideBarComponent'
import { MainProfileComponent } from '../components/Profile/MainProfileComponent'
import { MyProfileComponent } from '../components/Profile/MyProfileComponent'
import { useParams } from 'react-router-dom'
import FooterProfile from '../components/Profile/FooterProfile'

export default function ProfilePage() {
  const { profileId } = useParams();

  return (
    <Container className='mt-3'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
        {profileId ? (
            <MainProfileComponent profileId={profileId} />
          ) : (
            /* se non ce profileId, vediamo il Mio Profilo*/
            <MyProfileComponent />
          )}
        </Col>
        <Col md={3}>
          <SideBarComponent />
        </Col>
      </Row>
      <FooterProfile />
    </Container>
  )
}
