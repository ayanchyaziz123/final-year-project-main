import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import Todolist from '../admin_components/Todolist';
import PieCharts from '../admin_components/PieCharts';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }, 
{ name: 'Page B', uv: 300, pv: 2500, amt: 1100 },
    { name: 'Page C', uv: 600, pv: 1500, amt: 1100 },
    { name: 'Page D', uv: 500, pv: 2700, amt: 1500 }, 
    { name: 'Page E', uv: 350, pv: 1900, amt: 1200 },];

const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
    </LineChart>
);


const DashboardScreen = () =>{
    return(
        <div className="large-devices-margin">
            <h1 className="text-white">Dashboard</h1>
            <Row>
                <Col md={3}>
                    <AdminSideBar/>
                </Col>
                <Col md={5}>           
                    <Card
                        bg="danger"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-money-check "></i> Revenue</Card.Header>
                        <Card.Body>
                            <Card.Title>2003211.00 </Card.Title>
    
                        </Card.Body>
                    </Card>     
                    <hr></hr>
                    <div style={{marginBottom: "100px"}}>

                    </div>
                    <div>{renderLineChart}</div>
                    <Todolist/>

                </Col>
                <Col md={2}>
                    <Card
                        bg="info"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-shopping-cart"></i> Order </Card.Header>
                        <Card.Body>
                            <Card.Title>20 </Card.Title>
                
                        </Card.Body>
                    </Card>
                    <hr></hr>
                    <PieCharts/>
                </Col>
                <Col md={2}>
                    <Card
                        bg="dark"
                        className="mb-2 text-white text-center"
                    >
                        <Card.Header className="nav-text"><i class="fas fa-users"></i> New Customers</Card.Header>
                        <Card.Body>
                            <Card.Title>30 </Card.Title>
                        </Card.Body>
                    </Card>
                </Col>

              
            </Row>
        </div>
    )
}

export default DashboardScreen;