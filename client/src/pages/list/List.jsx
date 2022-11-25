import "./list.scss"
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"

const List = ({ column, name, type }) => {
  return (
    <div className="list">
      {/* {type === "Admin" && <Sidebar />} */}
      {/* {type === "Admin" && <NavSidebar />} */}
      <div className="AdminListContainer">
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}
        <Datatable column={column} name={name} type={type} />
      </div>
    </div>
  )
}

export default List