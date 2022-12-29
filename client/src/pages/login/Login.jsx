import "./login.scss"

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'




// type will tell whether admin or student
function Login({ type }) {


  const classURL = "https://drive.google.com/uc?id=1AO6eJhTrn8bF4U-JA9OcRP6pLq2P2E5p";
  const teachURL = "https://drive.google.com/uc?id=1vbn0I0RkKFCyxbZfHtLcQ3j3GN0UCm-1";

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

      <div className="img-container">
        <img src={type === "Admin"? teachURL : classURL} alt="" />
      </div>

      <div className="lContainer">

        <h1>Welcome to {type === "Admin"? "Admin Portal" : "Student Portal"}!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>

        <label htmlFor="username">Enter Username</label>
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange} // handlechange sets the value to usestate
          className="lInput"
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />

        <p style={{"marginTop": "20px", "marginBottom": "10px"}}>Forgot Password?</p>

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