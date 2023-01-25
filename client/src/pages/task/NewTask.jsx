import "../../style/form.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import AdminNavbar from "../../components/adminNavbar/AdminNavbar";

const NewTask = ({ inputs, title }) => {

  const [info, setInfo] = useState({});
  
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    const button = document.getElementsByClassName("form-btn")
    button.disabled = "true"
    e.preventDefault();
    try {
      const newtask = {
        ...info,
      }

      await axios.post("http://localhost:5500/api/tasks", newtask, {
        withCredentials: false
      });
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="new">

      <div className="newContainer">
        <AdminNavbar />
        
        <div className="top">
          <h1>{title}</h1>
        </div>
        
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    onChange={handleChange}
                    type={input.type}
                    placeholder={input.placeholder}
                  />
                </div>
              ))}
            </form>
            <button onClick={handleClick} className="form-btn">Create Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
