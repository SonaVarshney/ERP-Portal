import "./editTask.scss";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { roles } from "../../source/formsource/teamsAndRole"
import useFetch from "../../hooks/useFetch";

const EditTask = ({ title }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const [info, setInfo] = useState({});
  const { data } = useFetch(`/tasks/${id}`)

  const navigate = useNavigate();


  useEffect(() => {
    setInfo(data)
  }, [data])

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  const handleClick = async (e) => {
    e.preventDefault();
    try {

      await axios.put(`http://localhost:5500/api/tasks/${id}`, info, {
        withCredentials: false
      });
      // await axios.post("https://stay-solutions.herokuapp.com/api/hotels", newhotel);
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  // console.log(data)
  console.log(info)

  return (
    <div className="new">
      {/* <Sidebar /> */}
      {/* <NavSidebar /> */}
      <div className="newContainer">
        <AdminNavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
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
            <button onClick={handleClick} id="submit">Edit Task</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTask;
