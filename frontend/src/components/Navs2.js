import React from 'react';
import {Nav} from 'react-bootstrap';

const Navs2 = () =>{
    return(
        <>
        <hr></hr>
            <h5 className="text-center mt-2 mb-2">Top Operating System</h5>

            <p className="text-center mt-1 mb-1">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Nav className="justify-content-center" activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">
                    
                        <div className="bg-warning p-3 br"  >
                            <div className="text-center nav-text" ><i class="fab fa-linux"></i></div>
                            <div className="text-center">Linux</div>
                        </div>
                    
                    
                    
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">
                        
                        <div className="bg-warning p-3 br" >
                            <div className="text-center nav-text" ><i class="fab fa-apple"></i></div>
                            <div className="text-center">Apple</div>
                        </div>
                        
                        
                        
                        </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">

                        <div className="bg-warning p-3 br"  >
                            <div className="text-center nav-text" ><i class="fab fa-android"></i></div>
                            <div className="text-center">Android</div>
                        </div>






                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">

                        <div className="bg-warning p-3 br"  >
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