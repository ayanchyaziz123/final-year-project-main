import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts } from '../actions/productActions'
import ProductOffer from '../components/ProductOffer'
import Navs from '../components/Navs'
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
           
            <Row>
                <Col md={9}>
                    <ProductOffer/>
                </Col>
                <Col md={3}>
                    <CompareProduct/>

                </Col>
                </Row>
            <br></br>

            <Navs/>

            <h4 className="mt-5">Latest Laptops</h4>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                    </div>
            }
           
        </div>
    )
}

export default HomeScreen
