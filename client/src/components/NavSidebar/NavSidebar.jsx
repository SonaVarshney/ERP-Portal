import React, { useState } from 'react'
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import TaskIcon from '@mui/icons-material/Task';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import EventIcon from '@mui/icons-material/Event';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import EditIcon from '@mui/icons-material/Edit';

import "./navSidebar.scss"
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DarkModeContext } from "../../context/darkModeContext";
import Query from '../query/Query';


const NavSidebar = ({ setOpen }) => {

    const { Dispatch } = useContext(DarkModeContext);
    const { dispatch, user } = useContext(AuthContext)
    const [openQuery, setOpenQuery] = useState(false);

    const handleClick = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGOUT" });
    }

    return (
        <div className='navSidebarContainer'>
            <motion.div animate={{ width: "200px" }} className="sidebar">
                <ul>
                    <li id='menu'>
                        <h2 >MAIN MENU</h2>
                        <CloseIcon className='icon' onClick={() => setOpen(false)} />
                    </li>
                    <p className="title">Main</p>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <DashboardIcon className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <p className="title">Lists</p>

                    {/* Takes you to list of all tasks created by admin */}
                    <Link to="/tasks" style={{ textDecoration: "none" }}>
                        <li>
                            <TaskIcon className="icon" />
                            <span>Tasks</span>
                        </li>
                    </Link>

                    {/* Takes you to list of all tasks created by teams */}
                    <Link to="/events" style={{ textDecoration: "none" }}>
                        <li>
                            <EventIcon className="icon" />
                            <span>Events</span>
                        </li>
                    </Link>

                    <p className="title">Create</p>
                    <Link to="/newEvent" style={{ textDecoration: "none" }}>
                        {user.subteam === "Technical Team" &&
                            <li>
                                <PersonAddIcon className="icon" />
                                <span>Event</span>
                            </li>
                        }
                    </Link>

                    <li onClick={() => setOpenQuery(true)}>
                        <ContactSupportIcon className="icon" />
                        <span>Query</span>
                    </li>


                    <p className="title">User</p>
                    <Link to={`/users/${user._id}`} style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Profile</span>
                        </li>
                    </Link>
                    <Link to={`/users/${user._id}/edit`} style={{ textDecoration: "none" }}>
                        <li>
                            <EditIcon className="icon" />
                            <span>Edit Profile</span>
                        </li>
                    </Link>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span onClick={handleClick}>Logout</span>
                    </li>
                    <p className="title">Theme</p>
                    <div className="theme">
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "LIGHT" })}
                        ></div>
                        <div
                            className="colorOption"
                            onClick={() => Dispatch({ type: "DARK" })}
                        ></div>
                    </div>
                </ul>
            </motion.div >
            {openQuery && <Query setOpen={setOpenQuery} user={user} />}
        </div >
    )
}

export default NavSidebar