import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";

const Widget = ({ type }) => {
  let data;


  switch (type) {
    case "ml":
      data = {
        title: "MACHINE LEARNING",
        code: 312,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "oops":
      data = {
        title: "OOPS",
        code: 314,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "compilerdesign":
      data = {
        title: "COMPILER DESIGN",
        code: 316,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "operatingsystem":
      data = {
        title: "OPERATING SYSTEM",
        code: 412,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      case "systemdesign":
      data = {
        title: "SYSTEM DESIGN",
        code: 414,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
      case "computernetwork":
      data = {
        title: "COMPUTER NETWORKS",
        code: 416,
        credit: 4,
        teacher: "Course Incharge: Ms. abc",
        link: "Related Material and Syllabus",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="teacher">{data.teacher}</span>
        <span className="code">{data.code}</span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {data.credit}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
