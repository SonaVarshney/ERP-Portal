import "../../style/form.scss";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUpdate = ({ inputs }) => {
  const [info, setInfo] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {

    e.preventDefault();

    try {
      await axios.post("http://localhost:5500/api/updates", { ...info }, {
        withCredentials: false
      })
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
          <h1>Add New Update</h1>
        </div>
        <div className="bottom">
          <div className="right">
            <form>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </form>
            <button onClick={handleClick} class="form-btn">Create Update</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUpdate;
