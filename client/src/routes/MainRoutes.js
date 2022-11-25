import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

//datatable columns
import { userColumns } from "../source/datatablesource/userColumns";
import { taskColumns } from "../source/datatablesource/taskColumns";
import { updateColumns } from "../source/datatablesource/updateColumns";

//form inputs
import { eventInputs } from '../source/formsource/eventInputs';

// Main pages
import Home from "../pages/home/Home";
import Login from "../pages/login/Login"
import Single from "../pages/single/Single"
import List from "../pages/list/List"
import NewEvent from '../pages/event/NewEvent';
import EditUser from '../pages/user/EditUser'
import Events from '../pages/event/Events';
import EditEvent from '../pages/event/EditEvent';

function AdminRoutes() {
    const { user } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {
        return user ? (children) : <Navigate to="/login" />
    }

    return (
        <BrowserRouter>
            <Routes>
                {/* login page for main */}
                <Route path="/login" element={
                    <Login type="Main" />
                } />

                {/* main routes */}

                {/* dashboard of main */}
                <Route path="/" element={
                    < RequireAuth >
                        <Home type="Main" />
                    </RequireAuth>
                } />




                {/* profile page */}
                <Route path="/users/:id" element={
                    <RequireAuth>
                        <Single type="Main" />
                    </RequireAuth>
                } />

                {/* edit profile page */}
                <Route path="/users/:id/edit" element={
                    <RequireAuth>
                        <EditUser title="Edit Profile" type="Main" />
                    </RequireAuth>
                } />

                {/* tasks page */}
                <Route path="/tasks" element={
                    <RequireAuth>
                        < List column={taskColumns} type="Main" name="Task" />
                    </RequireAuth>
                } />

                {/* updates page */}
                <Route path="/updates" element={
                    <RequireAuth>
                        < List column={updateColumns} type="Main" name="Update" />
                    </RequireAuth>
                } />

                {/* events */}
                <Route path="/events" element={
                    <RequireAuth>
                        <Events />
                    </RequireAuth>
                } />

                {/* create events page */}
                <Route path="/newEvent" element={
                    <RequireAuth>
                        <NewEvent inputs={eventInputs} title="Add New Event" />
                    </RequireAuth>
                } />

                <Route path="/events/:id" element={
                    <RequireAuth>
                        <EditEvent inputs={eventInputs} title="Edit Event" />
                    </RequireAuth>
                } />
            </Routes >
        </BrowserRouter >
    )
}

export default AdminRoutes