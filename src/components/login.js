import React , {useRef, useState} from 'react'
import {Card, Form, Button, Alert, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function Login(props) {

    const emailref = useRef()
    const passwordref = useRef()


    const [error, setError] = useState('')

    const [loading, setLoading] = useState(false)

    async function handleSubmit(e)
    {
        e.preventDefault()


    }


    return (
        <div>
            <Container className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}
      >
        <div className="w-100" style={{maxWidth: "600px"}}>
            <Card>
                <Card.Body>
                    <h3 className='text-center mb-4'>Log In</h3>


                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailref} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordref} required />
                        </Form.Group>

                        <br/>

                        
                        <Button disabled={loading} className='w-100' type="Submit">Log In</Button>

                    </Form>

                </Card.Body>
                <div 
                className="w-100 text-center mt-2"
                
                >

                    Dont have an account?<Link to='/signup'>Sign Up</Link> 
                </div>
            </Card>
            </div>
      </Container>
        </div>
    )
}
