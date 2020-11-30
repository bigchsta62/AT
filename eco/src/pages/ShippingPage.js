import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

const ShippingPage = ({ history }) => {
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [zip, setZip] = useState('')
    const [country, setCountry] = useState('')

    const submitHandler = () => {
        console.log(submitHandler)
    }

    return (
        <FormContainer>
            <h1>SHIPPING</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>ADDRESS:</Form.Label>
                    <Form.Control type='text' placeholder='Enter Address' value={address} required onChange={(e) => setAddress(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='city'>
                    <Form.Label>CITY:</Form.Label>
                    <Form.Control type='text' placeholder='Enter City' value={city} require onChange={(e) => setCity(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId='zip'>
                    <Form.Label>ZIP:</Form.Label>
                    <Form.Control type='text' placeholder='Enter Zip' value={zip} require onChange={(e) => setZip(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='country'>
                    <Form.Label>COUNTRY:</Form.Label>
                    <Form.Control type='text' placeholder='Enter Country' value={country} require onChange={(e) => setCountry(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='submit' variant='info'> Continue </Button>

            </Form>
        </FormContainer>
    )
}

export default ShippingPage
