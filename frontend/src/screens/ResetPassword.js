import React from 'react';
import {Form, Row, Col, Button} from 'react-bootstrap';

const ResetPassword = () =>{
    return(
        <div className="large-devices-margin">
          
                <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4}>
                        <h3>Reset Password</h3>
                          <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                            size="sm"
                            type='email'
                            placeholder='Enter Email'
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button size="sm" className="btn-block">Submit</Button>

                    </Col>
                    <Col sm={4}>
                    </Col>
                </Row>
        

        </div>
    )
}
export default ResetPassword;