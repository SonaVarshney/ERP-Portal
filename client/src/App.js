
// CSS
import "./style/dark.scss";


// React Stuff
import { useContext } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"


// Context
import { AuthContext } from "./context/AuthContext";
import { DarkModeContext } from "./context/darkModeContext";


// Datatable Columns
import { studentColumns } from "./source/datatablesource/studentColumns";
import { facultyColumns } from "./source/datatablesource/facultyColumns";
import { taskColumns } from "./source/datatablesource/taskColumns";
import { updateColumns } from "./source/datatablesource/updateColumns";


// Form Inputs
import { studentInputs } from "./source/formsource/studentInputs"
import { taskInputs } from "./source/formsource/taskInputs"
import { facultyInputs } from "./source/formsource/facultyInputs"
import { updateInputs } from "./source/formsource/updateInputs"
import { eventInputs } from './source/formsource/eventInputs';


// Admin Pages
import NewStudent from "./pages/student/NewStudent";
import NewFaculty from "./pages/faculty/NewFaculty";
import NewTask from "./pages/task/NewTask";
import NewUpdate from "./pages/update/NewUpdate"
import EditTask from './pages/task/EditTask';
import EditUpdate from './pages/update/EditUpdate';


// Main Pages
import NewEvent from './pages/event/NewEvent';
import Events from './pages/event/Events';
import EditEvent from './pages/event/EditEvent';


// Common Pages
import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import SingleStudent from "./pages/singleStudent/SingleStudent"
import SingleFaculty from "./pages/singleFaculty/SingleFaculty"
import List from "./pages/list/List"
import Landing from "./pages/Landing/Landing";
import EditStudent from './pages/student/EditStudent';
import EditFaculty from './pages/faculty/EditFaculty';


function App() {
  
  const { darkMode } = useContext(DarkModeContext);  

  const { user } = useContext(AuthContext)

  // if user is not logged in then redirect to home page if user tries to 
  // access some page
  
  const RequireAuth = ({ children }) => {
    return user ? (children) : <Navigate to="/home" />
  }

  return (

    // darkmode context
    <div className={darkMode ? "app dark" : "app"}>

      <BrowserRouter>
       <Routes>

        {/* Landing page */}
        <Route path="/home" element={<Landing />} />



        {/****************************************************************************************************/}

        {/* Admin Routes */}



        {/* login page for admin */}
        <Route path="/adminLogin" element={
            <Login type="Admin" />
        } />

        {/* dashboard of admin */}

        <Route path="/admin" element={
            <RequireAuth>
                <Home type="Admin" />
            </RequireAuth>
        } />



        {/* routes for students */}

        {/* list of students */}
        <Route path="/admin/students" element={
          <RequireAuth>
              <List column={studentColumns} name="Student" type="Admin" />
          </RequireAuth>
        } />

        {/* single page for student */}
          <Route path="/admin/students/:studentId" element={
            <RequireAuth>
              <SingleStudent type="Admin" />
            </RequireAuth>
        } />

        {/* edit page for student */}
        <Route path="/admin/students/:studentId/edit" element={
          <RequireAuth>
            <EditStudent title="Update Student" type="Admin" />
          </RequireAuth>
        } />

        {/* create user student */}
        <Route path="/admin/students/new" element={
          <RequireAuth>
            <NewStudent inputs={studentInputs} title="Add New Student" />
          </RequireAuth>
        } />



        {/* routes for faculties */}

        {/* list of faculties */}
        <Route path="/admin/faculties" element={
          <RequireAuth>
              <List column={facultyColumns} name="Faculty" type="Admin" />
          </RequireAuth>
        } />

        {/* single page for faculty */}
          <Route path="/admin/faculties/:facultyId" element={
            <RequireAuth>
              <SingleFaculty type="Admin" />
            </RequireAuth>
        } />

        {/* edit page for student */}
        <Route path="/admin/faculties/:facultyId/edit" element={
          <RequireAuth>
            <EditFaculty title="Update Faculty" type="Admin" />
          </RequireAuth>
        } />

        {/* create faculty */}
        <Route path="/admin/faculties/new" element={
          <RequireAuth>
            <NewFaculty inputs={facultyInputs} title="Add New Faculty" />
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




        {/****************************************************************************************************/}

        {/* Main Routes */}

        {/* login page for main */}
        <Route path="/studentLogin" element={
          <Login type="Student"/>
        } />

        <Route path="/facultyLogin" element={
          <Login type="Faculty" />
        } />

        {/* dashboard of main */}
        <Route path="/" element={
            < RequireAuth >
                <Home type="Main" />
            </RequireAuth>
        } />

        {/* profile page for student */}
        <Route path="/students/:id" element={
            <RequireAuth>
                <SingleStudent type="Main" />
            </RequireAuth>
        } />

        {/* edit profile page for faculty*/}
        <Route path="/students/:id/edit" element={
            <RequireAuth>
                <EditStudent title="Edit Profile" type="Main" />
            </RequireAuth>
        } />

        {/* profile page for faculty */}
        <Route path="/faculties/:id" element={
            <RequireAuth>
                <SingleFaculty type="Main" />
            </RequireAuth>
        } />

        {/* edit profile page for faculty */}
        <Route path="/faculties/:id/edit" element={
            <RequireAuth>
                <EditFaculty title="Edit Profile" type="Main" />
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

        {/* edit events page */}
        <Route path="/events/:id" element={
            <RequireAuth>
                <EditEvent inputs={eventInputs} title="Edit Event" />
            </RequireAuth>
        } />

        </Routes>
      </BrowserRouter>

    </div>

  );
}

export default App;
