import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Container, Form } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductOffer from '../components/ProductOffer'
import ProductOffer2 from '../components/ProductOffer2'
import Navs from '../components/Navs'
import Navs2 from '../components/Navs2'
import CompareProduct from '../components/CompareProduct'
import ProductCarousel from '../components/ProductCarousel'



function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <div>
            <Container>
           
            <Row>
                <Col md={9}>
                    <ProductOffer2/>
                </Col>
                <Col md={3}>
                    <CompareProduct/>
                </Col>
                
                </Row>
            <br></br>
            </Container>
            </div>
    
            <Navs2/>
            <Container>

            <h4 className="mt-5">Latest Laptops</h4>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            <Col md={2}>
                                <h3>This is me</h3>
                                    <Form>
                                        {['checkbox', 'radio'].map((type) => (
                                            <div key={`inline-${type}`} className="mb-3">
                                                <Form.Check
                                                    inline
                                                    label="1"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-1`}
                                                />
                                                <Form.Check
                                                    inline
                                                    label="2"
                                                    name="group1"
                                                    type={type}
                                                    id={`inline-${type}-2`}
                                                />
                                                <Form.Check
                                                    inline
                                                    disabled
                                                    label="3 (disabled)"
                                                    type={type}
                                                    id={`inline-${type}-3`}
                                                />
                                            </div>
                                        ))}
                                    </Form>
                            </Col>
                            <Col md={10}>
                        

                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                        </Col>
                        </Row>
                        
                    </div>
            }
            </Container>
           
        </div>
    )
}

export default HomeScreen
