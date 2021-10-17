import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import ProductCarousel from '../components/ProductCarousel'
import { useHistory } from "react-router-dom";

function TopRatedProductScreen() {
    const history = useHistory();
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])


    return (
        <div>
            <h1>Top rated Product</h1>
            {!keyword && <ProductCarousel />}
        </div>
    )
}
export default TopRatedProductScreen;