import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import useFetch from "../../hooks/useFetch.js"
import { useEffect } from "react";
import axios from "axios";
import Modal from "../../components/modal/Modal";

const Datatable = ({ column, name, type }) => {
  const location = useLocation();
  console.log(column)
  let path
  if (type === "Admin")
    path = location.pathname.split("/")[2];
  else if (type === "Main")
    path = location.pathname.split("/")[1];

  const [list, setList] = useState([]);
  const { data } = useFetch(`/${path}`)
  const [openModal, setOpenModal] = useState(false);
  const [rowid, setRowid] = useState("");


  useEffect(() => {
    if (name === "User")
      setList(data.filter((d) => d.isAdmin === false));
    else
      setList(data)
  }, [data])


  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:5500/api/${path}/${id}`, { withCredentials: false }
      );

      setList(list.filter((item) => item._id !== id));
    } catch (err) {
      console.log(err)
    }
  };


  const handleClick = (id) => {
    setOpenModal(true);
    setRowid(id);
  }

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: (params) => {
        return (

          <div className="cellAction">

            {/* folder link to user's folders */}
            {path === "users" &&
              <a href={params.row.folderLink} style={{ textDecoration: "none" }} rel="noopener" target='_blank'>
                < div className="viewButton">Folder Link</div>
              </a>
            }

            {/* view will take you to Single page in case of users and open modals in case of tasks and updates */}
            {(path === "users") ? (<><Link to={`/admin/${path}/${params.row._id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link></>) : (<div className="viewButton" onClick={() => handleClick(params.row._id)}>View</div>)}

            {type === "Admin" && <Link to={`${params.row._id}/edit`} style={{ textDecoration: "none" }}>
              <div className="viewButton">Edit</div>
            </Link>}

            {type === "Admin" && <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>}
          </div >
        );
      },
    },
  ];

  return (
    <div className="datatable">

      <div className="datatableTitle">
        {name}s
      </div>

      {<DataGrid
        className="datagrid"
        rows={list}
        columns={column.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
        getRowId={row => row._id}
      />}
      {openModal && <Modal setOpen={setOpenModal} id={rowid} type={path} />}
    </div>
  );
};

export default Datatable;
