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
  const { data } = useFetch("/events");

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>

          {/* Column Names */}
          <TableRow>
            <TableCell className="tableCell">Event ID</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Team</TableCell>
            <TableCell className="tableCell">Venue</TableCell>
            <TableCell className="tableCell">Date</TableCell>
          </TableRow>
        </TableHead>


        <TableBody>
          {data.map((row) => (

            // row.id is just a number
            <TableRow key={row.id}>

              {/* id of data entry */}
              <TableCell className="tableCell">{row._id}</TableCell>
              
              {/* Event poster and name */}
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.poster} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell>

              {/* Other details */}
              <TableCell className="tableCell">{row.desc}</TableCell>
              <TableCell className="tableCell">{row.teamName}</TableCell>
              <TableCell className="tableCell">{row.venue}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              
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