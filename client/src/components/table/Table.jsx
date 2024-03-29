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
  const { data } = useFetch("/updates");

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{"backgroundColor": "#EEEEEE"}}>

          {/* Column Names */}
          <TableRow>
            <TableCell className="tableCell" style={{"fontWeight": "bold"}}>Update</TableCell>
            <TableCell className="tableCell" style={{"fontWeight": "bold"}}>Description</TableCell>
            {/* <TableCell className="tableCell">Date</TableCell> */}
          </TableRow>
        </TableHead>


        <TableBody>
          {data.map((row) => (

            // row.id is just a number
            <TableRow key={row.id}>
              
              {/* Event poster and name
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.poster} alt="" className="image" />
                  {row.name}
                </div>
              </TableCell> */}

              {/* Other details */}
              <TableCell className="tableCell">{row.title}</TableCell>
              <TableCell className="tableCell">{row.desc}</TableCell>
              
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