import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";
import {Link, NavLink} from 'react-router-dom';


const SideBar = history => {


    return (
        <>

            <Nav className="col-md-12 d-none d-md-block bg-warning sidebar p-3">
                <div className="sidebar-sticky "></div>
                <Nav.Item>
                    
                    <NavLink
                        className="navbar-item h5 font-weight-bold ml-3 mt-2"
                        activeClassName="is-active"
                        to="/admin/deshboard"
                        exact
                    >
                        <i class="fas fa-tachometer-alt"></i> Dashboard
                    </NavLink>
                </Nav.Item>
                <hr></hr>
                <Nav.Item>
       
                    <NavLink
                        className="navbar-item h5 font-weight-bold ml-3 mt-2"
                        activeClassName="is-active"
                        to="/admin/userlist"
                        exact
                    >
                        <i class="fas fa-users"></i> Users
                    </NavLink>
                </Nav.Item>
                <hr></hr>
                <Nav.Item>
                    <NavLink
                        className="navbar-item h5 font-weight-bold ml-3"
                        activeClassName="is-active"
                        to="/admin/productlist"
                        exact
                    >
                        <i class="fab fa-product-hunt"></i>Products
                    </NavLink>
                </Nav.Item>
                <hr></hr>
                <Nav.Item>
                    <NavLink
                        className="navbar-item h5 font-weight-bold ml-3"
                        activeClassName="is-active"
                        to="/admin/orderlist"
                        exact
                    >
                        <i class="fab fa-first-order"></i>Orders
                    </NavLink>
                </Nav.Item>
            </Nav>

        </>
    );
};
const AdminSideBar = withRouter(SideBar);
export default AdminSideBar;