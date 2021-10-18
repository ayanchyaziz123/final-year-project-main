import React from 'react'
import {Nav, Link} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
function Navs() {
     
    const history = useHistory();

    const handleSelect = (eventKey) => {
        if(eventKey == "pricePredict")
        {
            history.push("/pricePredict");
        }
        if (eventKey == "topRatedProduct")
        {
            history.push("/topRatedProduct");
        }
        if (eventKey == "contact") {
            history.push("/contact");
        }
        
    }

    return(
        <div>


            <Nav className="justify-content-center" activeKey="/home" >
                <Nav.Item>
                    <Nav.Link eventKey="topRatedProduct" onSelect={handleSelect} style={{ fontSize: "20px" }}><i class="fas fa-star"></i> Top Rated Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pricePredict" onSelect={handleSelect} style={{ fontSize: "20px" }}><i class="fas fa-laptop-medical text-dark"></i> PREDICT HOME PRICE</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="contact" onSelect={handleSelect} style={{ fontSize: "20px" }}><b><i class="fas fa-id-card-alt"></i> CONTACT</b></Nav.Link>
                </Nav.Item>
            </Nav>
            
        </div>
    )
    
}

export default Navs
