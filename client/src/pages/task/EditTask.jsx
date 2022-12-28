import "../../style/form.scss";

import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
import useFetch from "../../hooks/useFetch";

import { roles } from "../../source/formsource/teamsAndRole"
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";

const EditTask = ({ title }) => {
  
  // get location and extract id out of it
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [info, setInfo] = useState({});

  // fetch data using id
  const { data } = useFetch(`/tasks/${id}`)

  const navigate = useNavigate();

  // data needs to be present in forms for it to change hence feed data into the array
  useEffect(() => {
    setInfo(data)
  }, [data])

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  // update the data in the data base using put method
  const handleClick = async (e) => {
    e.preventDefault();
    try {

      await axios.put(`http://localhost:5500/api/tasks/${id}`, info, {
        withCredentials: false
      });

      // go back to previous page
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="new">

      <div className="newContainer">
        <AdminNavbar />

        {/* Title of form */}
        <div className="top">
          <h1>{title}</h1>
        </div>

        {/* Form */}
        <div className="bottom">
          <div className="right">
            
            <form>
              <div className="formInput" >
                <label>Task Name</label>
                <input
                  id="title"
                  onChange={handleChange}
                  type="text"
                  placeholder="Add title of task"
                  value={info.title}
                />
              </div>

              <div className="formInput">
                <label>Task Deadline </label>
                <input
                  id="deadline"
                  onChange={handleChange}
                  type="date"
                  value={info.deadline}
                />
              </div>

              <div className="formInput" >
                <label>Description</label>
                <input
                  id="desc"
                  onChange={handleChange}
                  type="text"
                  value={info.desc}
                  placeholder="Add task desciption"
                />
              </div>

              <div className="formInput">
                <label>Assigned To</label>
                
                {/* Select bar */}
                <select
                  id="assignedTo"
                  onChange={handleChange}
                  value={info.assignedTo}
                >
                  {roles.map((r) => (
                    <option key={r.id} value={r.value}>{r.role}</option>
                  ))}

                </select>

              </div>
            </form>

            {/* Submit Button */}
            <button onClick={handleClick} id="submit">Edit Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
