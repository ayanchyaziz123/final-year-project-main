import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Button, Row, Col, ListGroup, Image, Card, InputGroup, FormControl, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'

function PlaceOrderScreen({ history }) {

    const [coupon_code, setCoupon_code] = useState('')
    const [coupon_code_status, setCoupon_code_status] = useState(0)
    const [user_id, setUser_id] = useState()
    const [total_discount, setTotal_discount] = useState(0)
    const orderCreate = useSelector(state => state.orderCreate)
    const { order, error, success } = orderCreate

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 100 ? 0 : 10).toFixed(2)
    cart.taxPrice = Number((0.082) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

    const getCoouponCodeStatus = () =>{
        setUser_id(userInfo._id);
        try{
        axios.post(`/api/products/coupon_check/`, {user_id, coupon_code}).then(res =>{
            console.log("res--->>>", res.data.status)
            console.log("Discount --->>>>>", res.data.total_discount)
            setCoupon_code_status(res.data.status);
            setTotal_discount(res.data.total_discount);
        })
    }
    catch(erro)
    {
        console.log(error)
    }
    }

    const coupon_discount = (
        <ListGroup.Item>
            <Row>
                <Col>Total Discount:</Col>
                <Col>${total_discount}</Col>
            </Row>
        </ListGroup.Item>
    );


    if (!cart.paymentMethod) {
        history.push('/payment')
    }

    useEffect(() => {
        
        if (success) {
            history.push(`/order/${order._id}`)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [[success, history]])

    const placeOrder = () => {
        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice,
        }))
    }

    return (
        <div className="container">
            <CheckoutSteps step1 step2 step3 step4 />
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>

                            <Form onSubmit={getCoouponCodeStatus}>

                            <h4>Enter Coupon Id</h4><span>if you have otherwise no need to submit</span>
                            <p>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="XY123ABC"
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                        size="sm"
                                        onChange={(e)=>{setCoupon_code(e.target.value)}}
                                    />
                                    <Button type="submit" variant="outline-warning" id="button-addon2" size="sm">
                                        Submit
                                    </Button>
                                </InputGroup>
                                    {coupon_code_status == 3 ? <p>Your Code is right you are being discounted</p> : coupon_code_status == 2 ?  <p>Your Code is not right please try again</p>: null}
                            </p>
                            </Form>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <h3>Shipping</h3>

                            <p>
                                <strong>Shipping: </strong>
                                {cart.shippingAddress.address},  {cart.shippingAddress.city}
                                {'  '}
                                {cart.shippingAddress.postalCode},
                                {'  '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            
                            <h3>Payment Method</h3>
                            <p>
                                <strong>Method: </strong>
                                {cart.paymentMethod}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h3>Order Items</h3>
                            {cart.cartItems.length === 0 ? <Message variant='info'>
                                Your cart is empty
                            </Message> : (
                                    <ListGroup variant='flush'>
                                        {cart.cartItems.map((item, index) => (
                                            <ListGroup.Item key={index}>
                                                <Row>
                                                    <Col md={1}>
                                                        <Image src={item.image} alt={item.name} fluid rounded />
                                                    </Col>

                                                    <Col>
                                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                    </Col>

                                                    <Col md={4}>
                                                        {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
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
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>Order Summary</h3>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items:</Col>
                                    <Col>${cart.itemsPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping:</Col>
                                    <Col>${cart.shippingPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax:</Col>
                                    <Col>${cart.taxPrice}</Col>
                                </Row>
                            </ListGroup.Item>

                           {coupon_code_status == 3 ? coupon_discount : null}


                            <ListGroup.Item>
                                <Row>
                                    <Col>Total:</Col>
                                    <Col>${cart.totalPrice}</Col>
                                </Row>
                            </ListGroup.Item>


                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button
                                    type='button'
                                    className='btn-block'
                                    disabled={cart.cartItems === 0}
                                    onClick={placeOrder}
                                    size="sm"
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default PlaceOrderScreen
