import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <strong className="ct">{product.rating > 2 && product.numReviews > 0 ? <span class="badge badge-warning"><i class="fas fa-star"></i> TOP REVIEWED</span> : null }</strong>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h5">
                    &#2547;{product.is_offer ?  product.price - ((product.price * product.offer_percentage)/100) : product.price}
                    <br></br><span class="text-tl">{product.is_offer ? '৳ ' + product.price : null}</span> {product.is_offer ? '-'+product.offer_percentage+'%' : null}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
