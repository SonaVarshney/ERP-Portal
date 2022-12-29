import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { AuthContext } from "../context/AuthContext";

//datatable columns
import { userColumns } from "../source/datatablesource/userColumns";
import { taskColumns } from "../source/datatablesource/taskColumns";
import { updateColumns } from "../source/datatablesource/updateColumns";

//form inputs
import { userInputs } from "../source/formsource/userInputs"
import { taskInputs } from "../source/formsource/taskInputs"
import { updateInputs } from "../source/formsource/updateInputs"

//admin pages
import Home from "../pages/home/Home";
import AdminLogin from "../pages/login/Login"
import List from "../pages/list/List"
import Single from "../pages/single/Single";
import NewUser from "../pages/user/NewUser";
import NewTask from "../pages/task/NewTask";
import NewUpdate from "../pages/update/NewUpdate"
import EditTask from '../pages/task/EditTask';
import EditUpdate from '../pages/update/EditUpdate';
import EditUser from '../pages/user/EditUser';

function AdminRoutes() {
    const { user } = useContext(AuthContext)

    const RequireAuth = ({ children }) => {

        if (user && user.username === "csd-admin")
            return children;
        else
            return <Navigate to="/AdminLogin" />
    }

    return (
        <BrowserRouter>
            <Routes>
                
                {/* login page for admin */}
                <Route path="/adminLogin" element={
                    <AdminLogin type="Admin" />
                } />

                {/* admin routes */}
                {/* dashboard of admin */}

                <Route path="/admin" element={
                    <RequireAuth>
                        <Home type="Admin" />
                    </RequireAuth>
                } />


                {/* routes for users */}

                {/* list of users */}
                <Route path="/admin/users" element={
                    <RequireAuth>
                        <List column={userColumns} name="User" type="Admin" />
                    </RequireAuth>
                } />

                {/* single page for user */}
                <Route path="/admin/users/:userId" element={
                    <RequireAuth>
                        <Single type="Admin" />
                    </RequireAuth>
                } />

                {/* edit page for user */}
                <Route path="/admin/users/:userId/edit" element={
                    <RequireAuth>
                        <EditUser title="Update User" type="Admin" />
                    </RequireAuth>
                } />

                {/* create user page */}
                <Route path="/admin/users/new" element={
                    <RequireAuth>
                        <NewUser inputs={userInputs} title="Add New User" />
                    </RequireAuth>
                } />


                {/* routes for tasks */}

                {/* list of tasks */}
                <Route path="/admin/tasks" element={
                    <RequireAuth>
                        <List column={taskColumns} name="Task" type="Admin" />
                    </RequireAuth>
                } />

                {/* edit page for tasks */}
                <Route path="/admin/tasks/:taskId/edit" element={
                    <RequireAuth>
                        <EditTask title="Update Task" />
                    </RequireAuth>
                } />

                {/* create task page */}
                <Route path="/admin/tasks/new" element={
                    <RequireAuth>
                        <NewTask inputs={taskInputs} title="Add New Task" />
                    </RequireAuth>
                } />


                {/* routes for updates */}
                <Route path="/admin/updates" element={
                    <RequireAuth>
                        <List column={updateColumns} name="Update" type="Admin" />
                    </RequireAuth>
                } />

                {/* edit task for update */}
                <Route path="/admin/updates/:updateId/edit" element={
                    <RequireAuth>
                        <EditUpdate title="Edit Updates" />
                    </RequireAuth>
                } />

                {/* create task page */}
                <Route
                    path="/admin/updates/new" element={
                        <RequireAuth>
                            <NewUpdate inputs={updateInputs} title="Add New Update" />
                        </RequireAuth>
                    }
                />

                {/* routes for events */}

                {/* list of events */}
                <Route path="/admin/events" element={
                    <RequireAuth>
                    </RequireAuth>
                } />

                {/* single page for users */}
                <Route path="/admin/events/:eventId" element={
                    <RequireAuth>
                        <Single />
                    </RequireAuth>
                } />
            </Routes>
        </BrowserRouter >
    )
}

export default AdminRoutes