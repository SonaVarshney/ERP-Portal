import "./table.scss";

// elements of the table
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

// to fetch data
import useFetch from "../../hooks/useFetch.js"

const List = () => {

  // fetch latest/upcoming events
  const { data } = useFetch("/tasks");

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>

          {/* Column Names */}
          <TableRow>
            <TableCell className="tableCell">Task ID</TableCell>
            <TableCell className="tableCell">Task</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Assigned To</TableCell>
            <TableCell className="tableCell">Deadline</TableCell>
            {/* <TableCell className="tableCell">Date</TableCell> */}
          </TableRow>
        </TableHead>


        <TableBody>
          {data.map((row) => (

            // row.id is just a number
            <TableRow key={row.id}>

              {/* id of data entry */}
              <TableCell className="tableCell">{row._id}</TableCell>
              
              {/* Event poster and name
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.poster} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell> */}

              {/* Other details */}
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">{`${row.desc.slice(0, 30)}...`}</TableCell>
              <TableCell className="tableCell">{row.assignedTo}</TableCell>
              <TableCell className="tableCell">{row.deadline}</TableCell>
              
              {/* Can be used to show some kind of status */}
              
              {/* <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;