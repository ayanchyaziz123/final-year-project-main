import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';
import AdminSideBar from '../admin_components/AdminSideBar';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Todolist from '../admin_components/Todolist';
import PieCharts from '../admin_components/PieCharts';
import { useDispatch, useSelector } from 'react-redux'

const data = [{ name: '2016', profit: 400000, revenue: 240000, expenses: 240000 }, 
    { name: '2017', profit: 300000, revenue: 250000, expenses: 110000 },
    { name: '2018', profit: 600000, revenue: 150000, expenses: 110000 },
    { name: '2019', profit: 500000, revenue: 270000, expenses: 150000 }, 
    { name: '2020', profit: 350000, revenue: 190000, expenses: 120000 },];

const renderLineChart = (
    <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 5 }}>
        <Line type="monotone" dataKey="profit" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="red" />
        <Line type="monotone" dataKey="expenses" stroke="black" />
        <Tooltip />
    </LineChart>
);


const DashboardScreen = ({history}) =>{

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    React.useEffect(() => {

        if (!userInfo) {
                history.push('/login')
        }

    }, [history, userInfo])


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
                    <div style={{ marginBottom: "100px" }}>

                    </div>
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