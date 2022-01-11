import React, {initialState, useState, useEffect} from 'react';
import Loader from '../components/Loader';
import axios from 'axios';
import {Row, Col, Card} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import ProductCompareChart from '../components/ProductCompareChart';


const baseURL = "http://127.0.0.1:8000/api/products/all/";

function CompareScreen(props){
    const [prod, setProd] = useState(initialState);
    const[loading, setLoading] = useState(false);



    useEffect( async () => {

        

        try {
            setLoading(true);
            axios.get(baseURL).then((response) => {
                setProd(response.data)

            });
            setLoading(false);
        }
        catch (error) {
            console.log(error);
        }
    }, []);
    return(
        
        <div className="large-devices-margin">

            {loading ? <Loader/>:
            <div>
          

            {prod && (
                <Row className="mt-2 mb-5">
                    
                    <Col md={6}>
                                <h3>This is compare product</h3>
                                <ProductCompareChart/>
                    </Col>
                    <Col md={3}>
                      
                              
                                    {props.location.state && prod.map((pr, index) => pr._id == props.location.state.lep1 ? (
                        <div key={index}>
                            <Link to={`/product/${pr._id}`}>
                                <Card.Img src={pr.image} className="img-fluid cc"/>
                            </Link>
                           <Card.Body>
                                <h5 >{pr.name}</h5>
                                <hr></hr>
                                                <p>Category: {pr.category}</p>
                                                <hr></hr>
                                                <p>Processor:  {pr.processor}</p>
                                                <hr></hr>
                                                <p>Display:  {pr.display}</p>
                                                <hr></hr>
                                                <p>Graphics:  {pr.graphics_card}</p>
                                                <hr></hr>
                                                <p>Ram:  {pr.ram_memory}</p>
                                                <hr></hr>
                                                <p>OS:  {pr.operating_system}</p>
                                                <hr></hr>
                                                <p>Storage:  {pr.storage}</p>
                                                <hr></hr>
                                                <p>Web Cam:  {pr.web_cam}</p>
                                                <hr></hr>
                                                <p> Color: {pr.color}</p>
                                                <hr></hr>
                                                <p>Battery:  {pr.battery}</p>
                                                <hr></hr>
                                                <p>Weight: {pr.weight}</p>
                                                <hr></hr>
                                                <p>Warranty:  {pr.warranty}</p>
                                                <hr></hr>
                                                   <p>Price: {pr.price}</p>
                           </Card.Body>

                        </div>
                    ) : null )}
                   
                    </Col>
                

                    <Col md={3}>
                     
                                    {props.location.state && prod.map((pr, index) => pr._id == props.location.state.lep2 ? (
                            <div key={index}>
                                <Link to={`/product/${pr._id}`}>
                                    <Card.Img src={pr.image} className="img-fluid cc"/>
                                </Link>
                                <Card.Body>
                                                <h5>{pr.name}</h5>
                                                <hr></hr>
                                                <p>Category:  {pr.category}</p>
                                                <hr></hr>
                                                <p>Processor:  {pr.processor}</p>
                                                <hr></hr>
                                                <p>Display:  {pr.display}</p>
                                                <hr></hr>
                                                <p>Graphics:  {pr.graphics_card}</p>
                                                <hr></hr>
                                                <p>Ram:  {pr.ram_memory}</p>
                                                <hr></hr>
                                                <p>OS:  {pr.operating_system}</p>
                                                <hr></hr>
                                                <p>Storage:  {pr.storage}</p>
                                                <hr></hr>
                                                <p>Web Cam:  {pr.web_cam}</p>
                                                <hr></hr>
                                                <p> Color: {pr.color}</p>
                                                <hr></hr>
                                                <p>Battery:  {pr.battery}</p>
                                                <hr></hr>
                                                <p>Weight: {pr.weight}</p>
                                                <hr></hr>
                                                <p>Warranty:  {pr.warranty}</p>
                                                <hr></hr>
                                                <p>Price: {pr.price}</p>
                                </Card.Body>

                            </div>
                        ) : null)}
               
                    </Col>

                </Row>
            )}
            </div>
            }

        </div>
    )
}
export default CompareScreen;