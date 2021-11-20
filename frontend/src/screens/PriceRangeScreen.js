import React, { initialState, useState, useEffect } from 'react';
import axios from 'axios';
import RangeSlider from 'react-bootstrap-range-slider';
import Loader from '../components/Loader';
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'


const baseURL = "http://127.0.0.1:8000/api/products/all/";

const PriceRangeScreen = () =>{
    const [value, setValue] = useState(21000);
    const [p, setP] = useState(initialState);
    const [element, setElement] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
        setLoading(true);
        setElement(10);
        setLoading(false);
        
    };

    useEffect(async () => {
        try {
    
            axios.get(baseURL).then((response) => {
                setP(response.data)

            });
           
          
        }
        catch (error) {
            console.log(error);
        }
    }, []);



    return (
        <div>
            {loading ? <Loader/>:
            <div>
                <h4 classNmae="mt-2">Search Price Range</h4>
        <RangeSlider
            value={value}
            max="150000"
            min="20000"
            tooltip="on"
            onChange={rangeSelector}
        >
            </RangeSlider>
            
        <span>tk</span>
                    <Row>
                        {p && p.map(product => product.price <= value ? (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <Product product={product} />
                            </Col>
                        ) : null)}
                    </Row>
        
        </div>
            }


       
    
        </div>
    );

}

export default PriceRangeScreen;