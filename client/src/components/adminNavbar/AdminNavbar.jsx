import "./adminNavbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";
import AdminSidebar from "../AdminSidebar/AdminSidebar"

const AdminNavbar = () => {
  const { Dispatch } = useContext(DarkModeContext);
  const { data } = useFetch(`/updates`)
  const { user } = useContext(AuthContext)
  const [openNotif, setOpenNotif] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);


  const navigate = useNavigate();


  const handleNotif = () => {
    setOpenNotif(!openNotif)
  }


  return (
    <div className="navbar">
      {openSidebar && <AdminSidebar setOpen={setOpenSidebar} />}

      <div className="wrapper">

        <Link to="/">
          <p className=""><img src={process.env.PUBLIC_URL + "/Assets/brand.png"} height="60px" alt="" /></p>
        </Link>

        <div className="items">


          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => Dispatch({ type: "TOGGLE" })}
            />
          </div>

          {/* Menu */}

          <div className="item" onClick={() => setOpenSidebar(!openSidebar)}>
            <ListOutlinedIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;