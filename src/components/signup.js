import React , {useRef, useState} from 'react'
import {Card, Form, Button, Alert, Container} from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function SignUp(props) {

    const nameref = useRef()
    const emailref = useRef()
    const passwordref = useRef()
    const passwordConfirmref = useRef()


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
                    <h3 className='text-center mb-4'>Sign Up</h3>

                    {/* { currentUser.email} */}

                    {error && <Alert variant="danger">{error}</Alert>}

                    <Form onSubmit={handleSubmit}>

                    <Form.Group id="Name">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="name" ref={nameref} required />
                        </Form.Group>

                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailref} required />
                        </Form.Group>

                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordref} required />
                        </Form.Group>

                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmref} required />
                        </Form.Group>

                        <br/>

                        <Button disabled={loading} className='w-100' type="Submit">Sign Up</Button>

                    </Form>

                </Card.Body>
                <div 
                className="w-100 text-center mt-2"
                
                >

                    Already have an account? <Link to='/login'>Log In</Link>
                </div>
            </Card>

            </div>
      </Container>
        </div>

        
    )
}
