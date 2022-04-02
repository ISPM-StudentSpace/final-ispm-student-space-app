import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import  './sidebar.css'
import { CgMenu } from "react-icons/cg";

function SidebarStudent():JSX.Element {

    const [show , setShow] = useState(false)
    const handleToggle = () => setShow(!show)

    return (
        <>
            <div className="d-flex">
                <div id="sidebar" className={show ? "desactiver" : "activer"}>
                    <div className="hamburger" onClick={handleToggle}><CgMenu/></div>
                    <div className="row">
                        <NavLink className="sidebar-item" to="/student/profil">Profil</NavLink>
                        <NavLink className="sidebar-item" to="/student/messages">Messages</NavLink>
                    </div>
                </div>
                <div className="container">
                    <Outlet/>
                </div>
            </div>
        </>
    );
}

export default SidebarStudent;