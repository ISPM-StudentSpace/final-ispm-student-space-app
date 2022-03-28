import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import '../assets/css/menu.css';
import { CgMenu } from "react-icons/cg";
import { NavLink, Link, Outlet } from 'react-router-dom';
import logo from "../assets/img/logoIspm.png";

function Menu():JSX.Element {

    return (
        <div className="Menu">
            
            <Navbar className='container' fixed='top' bg="light" expand="lg">
                <Navbar.Brand><Link to="/"><img src={logo} alt="logo ISPM" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <CgMenu/>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav className="mr-auto">
                        <Nav.Item><NavLink className="nav-link" to="/">Home</NavLink></Nav.Item> 
                        <NavDropdown title="Presentation" id="presentation">
                            <NavDropdown.Item href="#action/3.1">General presentation</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Departments & Courses</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Register</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="News & Events" id="newEvent">
                            <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">ISPM in the press & media</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Important events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Weddings & other happy events</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Extracurricular activities & Sports</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Researches" id="researches">
                            <NavDropdown.Item href="#action/3.1">Awards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Scientific publications</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Item><NavLink className="nav-link login-link" to="/Login">Log in</NavLink></Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Outlet/>

        </div>
    );
}

export default Menu;