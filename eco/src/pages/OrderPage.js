import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getOrderDetails } from '../actions/orderActions'


const OrderPage = ({ match }) => {
    const orderId = match.params.id
    const dispatch = useDispatch()

    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails

    useEffect(() => {
        dispatch(getOrderDetails(orderId))
        // eslint-disable-next-line
    }, [dispatch])



    return loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : <>
        <h2>Purchase Order {order._id}</h2>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        {/* <p><strong>Name:</strong> {order.user.email}</p> */}
                        Address:
                        {/* <p><a href={`mailto:${order.user.email}`}>{order.user.email}</a></p> */}
                        <p>


                            {order.shippingAddress.address},{' '}
                            {order.shippingAddress.city},{' '}
                            {order.shippingAddress.zip}{'  '}
                            {order.shippingAddress.country}



                        </p>

                        {order.isDelivered ? <Message variant='success'>{order.deliveredAt}</Message> : <Message variant='danger'>Delivery in Route</Message>}

                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment</h2>
                        <p>
                            Method:{' '}{order.paymentMethod}
                        </p>
                        {order.isPaid ? <Message variant='success'>{order.paidAt}</Message> : <Message variant='danger'>Payment Required</Message>}
                    </ListGroup.Item>

                    <ListGroup.Item>

                        <h2>Current Order</h2>

                        {order.orderItems.length === 0 ? <Message>Where is your Order?</Message> :


                            (<ListGroup variant='flush'>
                                {order.orderItems.map((item, index) => (
                                    <ListGroup.Item key={index}>
                                        <Row>
                                            <Col md={1}>
                                                <Image src={item.image} alt={item.name} fluid rounded />
                                            </Col>
                                            <Col>
                                                {/* //remember to bring in the link? */}
                                                <Link to={`/product/${item.product}`}>
                                                    {item.name}
                                                </Link>
                                            </Col>
                                            <Col md={4} >
                                                {item.qty} x ${item.price} = ${item.qty * item.price}

                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                            )}

                    </ListGroup.Item>
                </ListGroup>
            </Col>
            <Col md={4}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2> Purchase Summary</h2>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Items</Col>
                            <Col>${order.itemsPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Shipping</Col>
                            <Col>${order.shippingPrice}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>

                        <Row>
                            <Col>Tax</Col>
                            <Col>${order.taxPrice}</Col>
                        </Row>

                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Total</Col>
                            <Col>${order.totalPrice}</Col>
                        </Row>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
        </Row>
    </>
}

export default OrderPage
