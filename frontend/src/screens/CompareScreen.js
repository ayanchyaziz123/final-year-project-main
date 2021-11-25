import React, {initialState, useState, useEffect} from 'react';
import Loader from '../components/Loader';
import axios from 'axios';
import {Row, Col, Card} from 'react-bootstrap';
import {Link, Redirect} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


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
        
        <div className="container">

            {loading ? <Loader/>:
            <div>
            <h1 className="text-center">Comparision between Two Laptops</h1>

            {prod && (
                <Row className="mt-2 mb-5">
                    <Col md={5}>
                          <Card className="bg-dark text-white p-2">
                              
                                    {props.location.state.lep1 && prod.map((pr, index) => pr._id == props.location.state.lep1 ? (
                        <div key={index}>
                            <Link to={`/product/${pr._id}`}>
                                <Card.Img src={pr.image} className="img-fluid cc"/>
                            </Link>
                           <Card.Body>
                                <h5 className="text-white">{pr.name}</h5>
                                <p>Ram {pr.ram_memory}</p>
                                <p>{ReactHtmlParser(pr.description)}</p>
                                <p>{pr.price}</p>
                           </Card.Body>

                        </div>
                    ) : null )}
                    </Card>
                    </Col>
                    <Col md={2}>
                        <h1 className="text-center mt-5">VS</h1>
                    </Col>

                    <Col md={5}>
                        <Card className="bg-dark text-white p-2">
                                    {props.location.state.lep2 && prod.map((pr, index) => pr._id == props.location.state.lep2 ? (
                            <div key={index}>
                                <Link to={`/product/${pr._id}`}>
                                    <Card.Img src={pr.image} className="img-fluid cc"/>
                                </Link>
                                <Card.Body>
                                    <h5 className="text-white">{pr.name}</h5>
                                    <p>Ram {pr.ram_memory}</p>
                                    <p>Storage {pr.storage}</p>
                                    <p>{ReactHtmlParser(pr.description)}</p>
                                    <p>{pr.price}</p>
                                </Card.Body>

                            </div>
                        ) : null)}
                        </Card>
                    </Col>

                </Row>
            )}
            </div>
            }

        </div>
    )
}
export default CompareScreen;