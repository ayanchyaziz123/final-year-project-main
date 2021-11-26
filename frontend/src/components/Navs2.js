import React from 'react';
import {Nav} from 'react-bootstrap';

const Navs2 = () =>{
    return(
        <>
        <hr></hr>
            <h5 className="text-center mt-4 mb-4">Top OS</h5>

            <p className="text-center mt-4 mb-4">Or right-aligned</p>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">
                    
                        <div className="bg-light p-3"  >
                            <div className="text-center nav-text" ><i class="fab fa-linux"></i></div>
                            <div className="text-center">Linux</div>
                        </div>
                    
                    
                    
                    
                    
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        
                        <div className="bg-light p-3" >
                            <div className="text-center nav-text" ><i class="fab fa-apple"></i></div>
                            <div className="text-center">Apple</div>
                        </div>
                        
                        
                        
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">

                        <div className="bg-light p-3"  >
                            <div className="text-center nav-text" ><i class="fab fa-android"></i></div>
                            <div className="text-center">Android</div>
                        </div>






                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">

                        <div className="bg-light p-3"  >
                            <div className="text-center nav-text" ><i class="fab fa-windows"></i></div>
                            <div className="text-center">Windows</div>
                        </div>



                    </Nav.Link>
                </Nav.Item>
            </Nav>
   
           
        </>
    )
}

export default Navs2;