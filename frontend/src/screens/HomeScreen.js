import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col,Container, Form, ListGroup } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import { listProducts, listCoupons } from '../actions/productActions'
import ProductOffer from '../components/ProductOffer'
import ProductOffer2 from '../components/ProductOffer2'
import Navs from '../components/Navs'
import Navs2 from '../components/Navs2'
import CompareProduct from '../components/CompareProduct'
import ProductCarousel from '../components/ProductCarousel'
import SearchRAM from '../components/SearchRam'
import Coupon from '../components/Coupon'
import SearchSlider from '../components/SearchSlider'




function HomeScreen({ history }) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)


    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search



    useEffect(() =>  {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            <div className="large-devices-margin">
   
                <Coupon/> 
           
            <Row>
                        <Col md={2}>
                        <ListGroup className="border border-warning">
                            <ListGroup.Item className="bg-dark text-white">1. new laptop</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Porta ac consectetur ac</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Vestibulum at eros</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Cras justo odio</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Morbi leo risus</ListGroup.Item>
                            <ListGroup.Item className="bg-dark text-white">Porta ac consectetur ac</ListGroup.Item>
                        </ListGroup>
                        </Col>
                <Col md={8}>
                    <ProductOffer2/>
                </Col>
                <Col md={2}>
                    <CompareProduct/>
                </Col>
                
                </Row>
            
            </div>
    
            <Navs2/>
            <div className="large-devices-margin">
        

            <h4 className="mt-5 text-white">Latest Laptops</h4>
            {loading ? <Loader />
                : error ? <Message variant='danger'>{error}</Message>
                    :
                    <div className="pr-md-5 pl-md-5 pt-3">
                        <Row>
                            <Col md={2}>
                                <SearchRAM/>
                                <br></br>
                                
                            </Col>
                            <Col md={10}>
                        

                        <Row>
                            
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3} >
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={page} pages={pages} keyword={keyword} />
                        </Col>
                        </Row>
                        
                    </div>
            }

            </div>
        
           
        </div>
    )
}

export default HomeScreen
