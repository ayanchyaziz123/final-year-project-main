import React from 'react';
import {Row, Col} from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';


const DashboardScreen = () =>{
    return(
        <div className="container">
            <h1>Dashboard</h1>
            <Row>
                <Col md={3}>
                    <AdminSideBar/>
                </Col>
                <Col>
                    <h1>This is dashboard screen</h1>
                </Col>
            </Row>
        </div>
    )
}

export default DashboardScreen;