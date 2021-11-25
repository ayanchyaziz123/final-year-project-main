import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, Row, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import SearchBox from './SearchBox'
import { logout } from '../actions/userActions'
import './style.css';

function Header() {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const dispatch = useDispatch()

    const logoutHandler = () => {
        dispatch(logout())
    }

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    return (
        <header>
            <Navbar className="navbar-dark bg-dark pt-1 pb-1 shadow" expand="lg" fixed="top" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        
                        <Navbar.Brand><span class="text-info h2">
                            <i class="fas fa-laptop-house"></i>
                            <b>L</b></span><span className="text-danger">a</span>
                        <span className="text-success">p</span>
                        <span className="text-warning">t</span>op Store</Navbar.Brand>
                    </LinkContainer>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <SearchBox/>
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart' className="active">
                                <Nav.Link><i className="fas fa-shopping-cart ct"></i> cart <span class="badge badge-warning ct3">{cartItems.length > 0 ? cartItems.length : null}</span></Nav.Link>
                            </LinkContainer>
                           
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username' className="active">
                                    <LinkContainer to='/profile' className="active">
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                    </LinkContainer>

                                    <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            ) : (
                                    <LinkContainer to='/login'>
                                        <Nav.Link><i className="fas fa-user"></i>Login</Nav.Link>
                                    </LinkContainer>
                                )}


                            {userInfo && userInfo.isAdmin && (
                                <NavDropdown title='Deshboard' id='adminmenue' className="active">
                                    <LinkContainer to='/admin/userlist'>
                                        <NavDropdown.Item>Users</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/productlist'>
                                        <NavDropdown.Item>Products</NavDropdown.Item>
                                    </LinkContainer>

                                    <LinkContainer to='/admin/orderlist'>
                                        <NavDropdown.Item>Orders</NavDropdown.Item>
                                    </LinkContainer>
                                    <LinkContainer to='/admin/deshboard'>
                                        <NavDropdown.Item>deshboard</NavDropdown.Item>
                                    </LinkContainer>

                                </NavDropdown>
                            )}


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
