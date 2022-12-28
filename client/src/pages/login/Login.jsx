import "./login.scss"

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'


// type will tell whether admin or student
function Login({ type }) {

  // function to navigate to a certain page once logged in
  const navigate = useNavigate();

  // sets the credentials entered by the user
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined
  })

  // call login functions from authcontext
  const { loading, error, dispatch } = useContext(AuthContext)
  
  // set the use state to what the user entered
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
  }

  const handleClick = async (e) => {
   
    e.preventDefault();
    
    dispatch({ type: "LOGIN_START" });
    
    try {
      const res = await axios.post("http://localhost:5500/api/auth/login", credentials, { withCredentials: false })
      
      // if admin then redirect to /admin i.e. localhost:3000/admin/
      if (type === "Admin") {
        if (res.data.isAdmin) {
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details })
          navigate("/admin")
        } else {
          dispatch({ type: "LOGIN_FAILURE", payload: { message: "You are not allowed" } })
        }
      }

      // if not admin redirect to / i.e localhost:3000/
      else {
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
        navigate("/");
      }

    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
    }
  }

  return (
    <div className="AdminLogin">
      <div className="lContainer">

        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange} // handlechange sets the value to usestate
          className="lInput"
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        {/* When button is clicked called handleclick so all the operations can be performed*/}
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>

        {/* If there is error display error message */}
        {error && <span>{error.message}</span>}
      </div>
    </div>
  )
}

export default Login