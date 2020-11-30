import React, { useState } from 'react'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { savePaymentMethod } from '../actions/cartActions'

const PaymentPage = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    if (!shippingAddress) {

        history.push('/shipping')

    }

    const [paymentMethod, setPaymentMethod] = useState('PayPal')


    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />
            <h1>Payment Method</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className='justify-content-center mb-4' >
                    <Form.Label as='legend'>Select Payment Method</Form.Label><br></br>

                    <Col>
                        <Form.Check type='radio' label='PayPal or CREDIT/DEBIT Card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check><br></br>
                        {/* <Form.Check type='radio' label='Other Additions to Payment' id='OtherPaymentMethods' name='paymentMethod' value='SamsungPay' onChange={(e) => setPaymentMethod(e.target.value)}></Form.Check> */}
                    </Col><br></br></Form.Group>
                <Button type='submit' variant='info'> Continue </Button>

            </Form>
        </FormContainer>
    )
}

export default PaymentPage