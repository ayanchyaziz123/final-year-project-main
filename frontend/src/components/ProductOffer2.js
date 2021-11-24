import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {Container} from 'react-bootstrap';
import Loader from './Loader'
import Message from './Message'
import { listOfferProducts } from '../actions/productActions'

function ProductOffer2() {
    const dispatch = useDispatch()

    const productOfferRated = useSelector(state => state.productOfferRated)
    const { error, loading, products } = productOfferRated

    useEffect(() => {
        dispatch(listOfferProducts())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                    <Carousel autoPlay="true" infiniteLoop="true" interval="1000" stopOnHover="true" >
                    {products.map(product => (

                        <div >
                            <img src={product.image} />
                            <p className="legend"> <h4 className="text-white">{product.name} real price (${product.price}) <br></br>offering price  ({product.offer_percentage}%) (${(product.price - (product.price * product.offer_percentage) / 100)}) </h4> </p>
                        </div>

                    ))}
        
                </Carousel>
            )

    )
}

export default ProductOffer2