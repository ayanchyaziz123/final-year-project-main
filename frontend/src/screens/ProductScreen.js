import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { listProductDetails, createProductReview } from '../actions/productActions'
import { PRODUCT_CREATE_REVIEW_RESET } from '../constants/productConstants'
import ReactImageMagnify from 'react-image-magnify';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import Coupon from '../components/Coupon';

function ProductScreen({ match, history }) {
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
   

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productReviewCreate = useSelector(state => state.productReviewCreate)
    const {
        loading: loadingProductReview,
        error: errorProductReview,
        success: successProductReview,
    } = productReviewCreate

    useEffect(() => {
        if (successProductReview) {
            setRating(0)
            setComment('')
            dispatch({ type: PRODUCT_CREATE_REVIEW_RESET })
        }

        dispatch(listProductDetails(match.params.id))

    }, [dispatch, match, successProductReview])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createProductReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (
        <div className="large-devices-margin">
            <Coupon />
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            {loading ?
                <Loader />
                : error
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={6}>
                                    
                                    <Carousel autoPlay="true" infiniteLoop="true" interval="1000" stopOnHover="true" >

                                            <div >
                                                <img src={product.image} />
                                            </div>
                                        <div >
                                            <img src={product.image2} />
                                        </div>
                                        <div >
                                            <img src={product.image3} />
                                            
                                        </div>

                                   

                                    </Carousel>
                                </Col>


                                <Col md={3}>
                                    <Card>
                                    <ListGroup variant="flush">
                                    <ListGroup.Item>
                                            <h3>{product.name}</h3>
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>

                                        <ListGroup.Item>
                                            <span className="h3">&#2547;{product.is_offer ? product.price - ((product.price * product.offer_percentage) / 100) : product.price}</span>
                                            <br></br><span class="text-tl">{product.is_offer ? '৳' + product.price : null}</span> <b>{product.is_offer ? '-' + product.offer_percentage + '%' : <br></br>}</b>
                                        </ListGroup.Item>
                                    

                                        <ListGroup.Item>
                                            Description: {ReactHtmlParser(product.description)}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                </Col>


                                <Col md={3}>
                                    <Card>
                                        <ListGroup variant='flush'>
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Price:</Col>
                                                    <Col>
                                                        <strong>৳ {product.price}</strong>
                                
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>
                                        
                                            <ListGroup.Item>
                                                <Row>
                                                    <Col>Status:</Col>
                                                    <Col>
                                                        {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                                    </Col>
                                                </Row>
                                            </ListGroup.Item>

                                            {product.countInStock > 0 && (
                                                <ListGroup.Item>
                                                    <Row>
                                                        <Col>Qty</Col>
                                                        <Col xs='auto' className='my-1'>
                                                            <Form.Control
                                                                as="select"
                                                                value={qty}
                                                                onChange={(e) => setQty(e.target.value)}
                                                            >
                                                                {

                                                                    [...Array(product.countInStock).keys()].map((x) => (
                                                                        <option key={x + 1} value={x + 1}>
                                                                            {x + 1}
                                                                        </option>
                                                                    ))
                                                                }

                                                            </Form.Control>
                                                        </Col>
                                                    </Row>
                                                </ListGroup.Item>
                                            )}


                                            <ListGroup.Item>
                                                <Button
                                                    onClick={addToCartHandler}
                                                    className='btn-block'
                                                    disabled={product.countInStock == 0}
                                                    size="sm"
                                                    type='button'>
                                                    Add to Cart
                                                </Button>
                                            </ListGroup.Item>
                                        </ListGroup>
                                    </Card>
                                </Col>
                            </Row>

                            <Row>
                                <Col md={6}>
                                    <Card>
                                    <h4>Reviews</h4>
                                    {product.reviews.length === 0 && <Message variant='info' size="sm">No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {product.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>Write a review</h4>

                                            {loadingProductReview && <Loader />}
                                            {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                            size="sm"
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                            size="sm"
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingProductReview}
                                                        type='submit'
                                                        variant='primary'
                                                        size="sm"
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    )

            }


        </div >
    )
}

export default ProductScreen
