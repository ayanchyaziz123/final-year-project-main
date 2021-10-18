import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <footer>
            <Container>
                <Row className="bg-dark text-white p-4">
                    <Col md={4}>

                        <h4 className="text-white">Links</h4>
                        <p>Home</p>
                        <p>Predict</p>
                        <p>Top product</p>

                    </Col>
                    <Col md={4}>
                        <h5 className="text-white">Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br></br>
                            Clear Water Bay, Kowloon<br></br>
                            HONG KONG<br></br>
                            <i class="fa fa-phone"></i>: +852 1234 5678<br></br>
                            <i class="fa fa-fax"></i>: +852 8765 4321<br></br>
                            <i class="fa fa-envelope"></i>:
                            <a href="mailto:confusion@food.net" className="text-white">aaziz9642@gmail.com</a>
                        </address>

                    </Col>
                    <Col><i class="fab fa-facebook-square ct2"></i>
                        <i class="fab fa-twitter-square ml-2 ct2"></i>
                        <i class="fab fa-google-plus ml-2 ct2"></i>
                        <i class="fab fa-instagram-square ml-2 ct2"></i>
                        <i class="fab fa-youtube ml-2 ct2"></i>
                        <i class="fab fa-linkedin ml-2 ct2"></i>
                        <i class="fas fa-envelope ml-2 ct2"></i>
                    </Col>
                    
                </Row>
                <Row className="bg-dark text-white">
                    <Col className="text-center py-3">Copyright &copy; Ayan&Nakib</Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
