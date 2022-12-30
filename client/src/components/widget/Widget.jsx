import "./widget.scss";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import StorageIcon from '@mui/icons-material/Storage';
import LanIcon from '@mui/icons-material/Lan';
import ComputerIcon from '@mui/icons-material/Computer';
import SourceIcon from '@mui/icons-material/Source';
import DevicesRoundedIcon from '@mui/icons-material/DevicesRounded';

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
          <ComputerIcon
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
          <SourceIcon
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
          <DevicesRoundedIcon
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
          <DeviceHubIcon
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
          <StorageIcon
            className="icon"
            style={{
              backgroundColor: "rgba(220, 53, 53, 0.2)",
              color: "rgb(220, 53, 53)",
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
          <LanIcon
            className="icon"
            style={{
              backgroundColor: "rgba(200, 92, 142, 0.2)",
              color: "rgb(200, 92, 142)",
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
        <div className="credit">
          <ArrowForwardIosRoundedIcon />
          {data.credit}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
