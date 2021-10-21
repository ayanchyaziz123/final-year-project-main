import React, {initialState, useState, useEffect} from 'react';
import axios from 'axios';
import {Row, Col, Card} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const baseURL = "http://127.0.0.1:8000/api/products/all/";

function CompareScreen(props){
    const [prod, setProd] = useState(initialState)
    const[come, setCome] = useState(false)

    useEffect( async () => {
        try {
            axios.get(baseURL).then((response) => {
                setProd(response.data)

            });
        }
        catch (error) {
            console.log(error);
        }
    }, []);
    return(
        
        <div>
            
            <h1 className="text-center">Comparision between Two Laptops</h1>

            {prod && (
                <Row className="mt-2 mb-5">
                    <Col md={5}>
                          <Card className="bg-dark text-white p-2">
                              
                    {prod.map((pr, index) => pr._id == props.location.state.lep1 ? (
                        <div key={index}>
                            <Link to={`/product/${pr._id}`}>
                                <Card.Img src={pr.image} className="img-fluid cc"/>
                            </Link>
                           <Card.Body>
                                <h5 className="text-white">{pr.name}</h5>
                                <p>{pr.description}</p>
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
                        {prod.map((pr, index) => pr._id == props.location.state.lep2 ? (
                            <div key={index}>
                                <Link to={`/product/${pr._id}`}>
                                    <Card.Img src={pr.image} className="img-fluid cc"/>
                                </Link>
                                <Card.Body>
                                    <h5 className="text-white">{pr.name}</h5>
                                    <p>{pr.description}</p>
                                    <p>{pr.price}</p>
                                </Card.Body>

                            </div>
                        ) : null)}
                        </Card>
                    </Col>

                </Row>
            )}

        </div>
    )
}
export default CompareScreen;