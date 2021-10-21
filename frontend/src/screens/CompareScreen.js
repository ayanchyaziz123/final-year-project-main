import React, {initialState, useState, useEffect} from 'react';
import axios from 'axios';
import {Row, Col} from 'react-bootstrap';

const baseURL = "http://127.0.0.1:8000/api/products/all/";

function CompareScreen(props){
    const [prod, setProd] = useState(initialState)

    useEffect( async () => {
        try {
            axios.get(baseURL).then((response) => {
                setProd(response.data)

            });
        }
        catch (error) {
            console.log(error);
        }
    });
    return(
        
        <div>
            <h4 className="mt-5 mb-5">Compare Btween {props.location.state.lep1} & {props.location.state.lep2}</h4>

            {prod && (
                <Row>
                    <Col md={6}>
                    {prod.map((pr, index) => pr.name == props.location.state.lep1 ? (
                        <div key={index}>
                            <h5>{pr.name}</h5>
                            <p>{pr.description}</p>
                            <p>{pr.price}</p>

                        </div>
                    ) : null )}
                    </Col>

                    <Col md={6}>
                        {prod.map((pr, index) => pr.name == props.location.state.lep2 ? (
                            <div key={index}>
                                <h5>{pr.name}</h5>
                                <p>{pr.description}</p>
                                <p>{pr.price}</p>

                            </div>
                        ) : null)}
                    </Col>

                </Row>
            )}

        </div>
    )
}
export default CompareScreen;