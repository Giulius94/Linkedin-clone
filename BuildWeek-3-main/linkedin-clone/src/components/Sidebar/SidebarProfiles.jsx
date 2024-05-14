import React from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'; {/*modifica felipe */}

export default function SidebarProfiles({utenti}) {

  return (
    <>
    {utenti && utenti
    .slice()
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .map((e, index) => 
        <>
            <div class="d-flex" key={index}>
            <Link to={`/profilepage/${e._id}`}> {/*modifica felipe */}
                <img class='imgCircle' src={e.image} />
               </Link>  {/*modifica felipe */}
                <div class="d-flex flex-column ms-2 w-75">
                    <Card.Text className='fw-bold my-0'>
                    {e.name} {e.surname}
                    </Card.Text>
                    <Card.Text class="align-self-start w-100 mb-2">
                    {e.title}
                    </Card.Text>
                    <Button variant="outline-dark" className='rndCircle w-75'><i class="bi bi-person-plus-fill"></i> Collegati</Button>
                </div>
             
            </div>
            <hr />
        </>
    )}
    </>
  )
}
