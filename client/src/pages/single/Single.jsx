import "./single.scss";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar";
import EditIcon from '@mui/icons-material/Edit';
import FolderIcon from '@mui/icons-material/Folder';
import useFetch from "../../hooks/useFetch";

const Single = ({ type }) => {
  const location = useLocation();
  let id
  if (type === "Main")
    id = location.pathname.split("/")[2];
  else
    id = location.pathname.split("/")[3];
  const { data } = useFetch(`/users/${id}`)
  const navigate = useNavigate();

  return (
    <div className="single">
      {/* {type === "Admin" && <Sidebar />} */}
      {/* {type === "Admin" && <NavSidebar />} */}

      <div className="singleContainer">
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.profilePicture || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{data._id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Username:</span>
                  <span className="itemValue">{data.username}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone Number:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Branch:</span>
                  <span className="itemValue">{data.branch}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Year:</span>
                  <span className="itemValue">{data.year}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Role:</span>
                  <span className="itemValue">{data.role}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Team:</span>
                  <span className="itemValue">{data.team}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Sub Team:</span>
                  <span className="itemValue">{data.subteam}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">GEC:</span>
                  <span className="itemValue">{(data.isGEC) ? "Yes" : "No"}</span>
                </div>
              </div>
            </div>

            <EditIcon style={{ height: "20px", paddingRight: "10px", cursor: "pointer" }} onClick={() => navigate("edit")} />
            <FolderIcon style={{ height: "20px", cursor: "pointer" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
