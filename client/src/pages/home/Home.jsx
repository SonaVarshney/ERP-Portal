import "./home.scss";

// calling all the components on the page
import Navbar from "../../components/navbar/Navbar";
import AdminNavbar from "../../components/adminNavbar/AdminNavbar"
import Widget from "../../components/Courses/Courses";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";

// type specifies the admin side or user side 
const Home = ({ type }) => {

  return (
    <div className="home">
      <div className="AdminHomeContainer">
        {/* Navbar according to the type of user */}
        {(type === "Admin") ? (<AdminNavbar />) : (<Navbar />)}

        
        {/* widgets */}
        <div className="widgets">
          <Widget type="ml" />
          <Widget type="oops" />
          <Widget type="compilerdesign" />
          <Widget type="computernetwork" />
          <Widget type="operatingsystem" />
          <Widget type="systemdesign" />
        </div>

        {/* total revenue and charts
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}

        {/* Upcoming Events */}
        <div className="AdminListContainer">
          <div className="listTitle">Tasks Assigned</div>
          <Table type="updates" />
        </div>
      </div>
    </div>
  );
};

export default Home;
