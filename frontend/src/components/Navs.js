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
        
    }

    return(
        <div>


            <Nav className="justify-content-center" activeKey="/home" >
                <Nav.Item>
                    <Nav.Link href="/home" style={{ fontSize: "20px" }}><i class="fas fa-home text-dark"></i> Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="pricePredict" onSelect={handleSelect} style={{ fontSize: "20px" }}><i class="fas fa-laptop-medical text-dark"></i> Predict Laptop Price</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/contact" style={{ fontSize: "20px" }}><b><i class="fas fa-id-card-alt"></i> Contact</b></Nav.Link>
                </Nav.Item>
            </Nav>
            
        </div>
    )
    
}

export default Navs
