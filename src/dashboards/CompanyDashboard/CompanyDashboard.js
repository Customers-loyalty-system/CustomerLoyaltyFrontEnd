import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidenav from "../Sidenav/Sidenav";

const CompanyDashboard = () => {
  // const navigate = useNavigate();
  // const { token, userType, logout } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!token || userType !== "company") {
  //     navigate("/login");
  //     logout();
  //   } else return;
  //   // eslint-disable-next-line
  // }, []);

  return (<Sidenav/>);
};

export default CompanyDashboard;
