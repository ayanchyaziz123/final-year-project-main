import { React as useState, useEffect } from 'react'
import {Row, Col, Tab, Nav, Card, Container} from 'react-bootstrap';
import UserList from '../admin_components/UserList';
import OrderList from '../admin_components/OrderList';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router';
import { listUsers, deleteUser } from '../actions/userActions'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DeshboardScreen = ({ history}) =>{

    const percentage = 66;

    const dispatch = useDispatch()

    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete


    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            history.push('/login')
        }

    }, [dispatch, history, successDelete, userInfo])
    



    return(
        <div>
            <h3>Deshboard</h3>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first" size="lg"><i class="fas fa-tachometer-alt"></i>Dashboard</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><i class="fas fa-users"></i>Users</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><i class="fab fa-product-hunt"></i>Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"><i class="fab fa-first-order"></i>Orders</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth"><i class="fab fa-first-order"></i>Contact</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                               
                                <Container className="bg-primary">
                                    <Card className="bg-dark text-white">
                                        <Card.Header><h4 className="text-white">Ecom</h4></Card.Header>
                                        <Card.Body>
                                            Where does it come from?
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has 
                                            roots in a piece of classical Latin literature from 45 BC, making it over 2000 
                                            years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                                            looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going 
                                            through the cites of the word in classical literature, discovered the undoubtable source. Lorem 
                                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes 
                                            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics,
                                             very popular during the Renaissance. 
                                            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                        </Card.Body>
                                    </Card>
                                    <Row className="mt-5">
                                       
                                        <Col>
                                            <Card className="bg-warning text-white">
                                                <Card.Header><h4 className="text-white"><i class="fab fa-rev"></i>Revenue : 20lkh</h4></Card.Header>
                                                <Card.Body>This is some text within a card body.</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="bg-info text-white">
                                                <Card.Header><h4 className="text-white"><i class="fas fa-store"></i>Purchase : 10lkh</h4></Card.Header>
                                                <Card.Body>This is some text within a card body.</Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="bg-danger text-white">
                                                <Card.Header><h4 className="text-white"><i class="fas fa-money-check-alt"></i>Sales : 05lkh</h4></Card.Header>
                                                <Card.Body>This is some text within a card body.</Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={4}>
                                            <Card className="mt-5 bg-dark p-4">
                                                <h4 className="text-white">Transection History</h4>
                                                <div style={{ width: 200, height: 200 }} >
                                                    <CircularProgressbar maxValue={100} value={66} text={`${percentage}%`} />
                                                </div>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card className="mt-5 bg-dark p-4 text-white mb-5">
                                                <Card.Header><h4 className="text-white">To Do list</h4></Card.Header>
                                                <Card.Body>
                                                    <ol type="i">
                                                        <li>Todo list</li>
                                                        <li>Blog App</li>
                                                        <li>
                                                            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                                        </li>
                                                        <li>Ecom</li>
                                                        <li>
                                                            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                                        </li>
                                                        <li>Todo list</li>
                                                        <li>Blog App</li>
                                                        <li>
                                                            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                                        </li>
                                                        <li>
                                                            n publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document
                                                        </li>
                                                    </ol>
                                                </Card.Body>
                                            </Card>
                                            <div style={{marginBottom: '300px'}}></div>
                                        </Col>

                                    </Row>
                                </Container>
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <UserList />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                This is 3
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <OrderList/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fifth">
                               This is contact
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
        
    )
}

export default DeshboardScreen;
