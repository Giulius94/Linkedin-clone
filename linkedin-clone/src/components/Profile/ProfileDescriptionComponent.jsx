import Card from 'react-bootstrap/Card'

export default function ProfileDescriptionComponent({bio}) {
    return (
        <Card className="my-2">
            <Card.Body>
                <Card.Text>
                    <p className='fs-4 fw-semibold m-0'>Informazioni</p>
                    <div className='mt-2'>
                        <p className='m-0'>
                            {bio}
                        </p>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
