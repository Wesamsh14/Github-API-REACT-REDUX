import React from 'react'
import { Form, Button } from 'react-bootstrap';

export default function SearchForm(props) {
    let { handleSubmit, handleChange } = props
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type='text' placeholder='username' autoComplete='off' onChange={handleChange}  />
                </Form.Group>
                <Button variant="primary" type='submit' onSubmit={handleSubmit}> Search on github </Button>
            </Form>
        </div>
    )
}
