import "./navbar.scss";

import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/AuthContext";

import { useContext, useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"

import NavSidebar from "../NavSidebar/NavSidebar"

const Navbar = () => {

  const { Dispatch, darkMode } = useContext(DarkModeContext);
  const { user } = useContext(AuthContext)
  
  const { data } = useFetch(`/updates`)
  let path

  if(user.isFaculty) {
    path = "faculties"
  } else if(user.isStudent) {
    path = "students"
  }
  
  // use states for setting notifications, opening notification popup and opening side bar
  const [notifs, setNotifs] = useState([])
  const [openNotif, setOpenNotif] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);

  // this function is used to go to a certain end point
  const navigate = useNavigate();

  // toggles open and close of notifications pop up
  const handleNotif = () => {
    setOpenNotif(!openNotif)
  }

  // feeds all notifications into the setNotifs array whenever page rerenders or data changes
  useEffect(() => {
    setNotifs(data.filter((d) => d.status === "New"))
  }, [data])


  return (
    <div className="navbar">

      {openSidebar && <NavSidebar setOpen={setOpenSidebar} />}

      <div className="wrapper">

        {/* takes to main landing page and if it is darkmode changes the brand so it's visible*/}
        <Link to="/">
          {/* {darkMode ? <p className="brand"><img src={process.env.PUBLIC_URL + "/Assets/brand2.png"} height="60px" alt="" /></p> : <p className="brand"><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} height="60px" alt="" /></p>} */}
          <p style={{"color": "black"}}>ERP Portal</p>
        </Link>

        <div className="items">

          {/* For toggling dark mode */}
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => Dispatch({ type: "TOGGLE" })}
            />
          </div>

          {/* Notifications */}
          <div className="item" id="notif">
            <NotificationsNoneOutlinedIcon className="icon" onClick={handleNotif} />
            <div className="counter">{notifs.length}</div> {/* Shows number of notifications */}
          </div>

          {/* Notifs drop down will show when user clicks and useState gets set to true */}
          {openNotif && <ul id="notif-menu">
            {notifs.map((item) => (
              <li>
                <h3>{item.title}</h3>
                <p>{item.desc.slice(0, 25)} ...</p>
              </li>
            ))}

            {/* Takes to the page of all updates */}
            <Link to="/updates" style={{ textDecoration: "none" }}>
              <li id="more">
                View all new updates
              </li>
            </Link>
          </ul>}

          {/* Menu */}

          <div className="item" onClick={() => setOpenSidebar(!openSidebar)}>
            <ListOutlinedIcon className="icon" />
          </div>

          {/* Profile */}

          <div className="item">
            <img
              src={user.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
              alt=""
              className="avatar"
              onClick={() => navigate(`/${path}/${user._id}`)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
