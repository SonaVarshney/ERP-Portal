import "../../style/form.scss";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";


const EditUpdate = ({ title }) => {
  const location = useLocation();
  const id = location.pathname.split("/")[3];
  const { data } = useFetch(`/updates/${id}`)

  const [info, setInfo] = useState({});

  useEffect(() => {
    setInfo(data)
  }, [data])

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5500/api/updates/${id}`, info, {
        withCredentials: false
      })
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }


  return (
    <div className="new">
      {/* <NavSidebar /> */}
      {/* <Sidebar /> */}
      <div className="newContainer">
        <AdminNavbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))} */}

              <div className="formInput">
                <label>Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  onChange={handleChange}
                  value={info.title}
                />
              </div>
              <div className="formInput">
                <label>Description</label>
                <input
                  id="desc"
                  type="text"
                  placeholder="Enter description"
                  onChange={handleChange}
                  value={info.desc}
                />
              </div>
            </form>
            <button onClick={handleClick} id="submit">Edit Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUpdate;
