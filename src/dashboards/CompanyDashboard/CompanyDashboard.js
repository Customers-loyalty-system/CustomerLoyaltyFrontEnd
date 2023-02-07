import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const CompanyDashboard = () => {
  const navigate = useNavigate();
  const { token, userType, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!token || userType !== "company") {
      navigate("/login");
      logout();
    } else return;
    // eslint-disable-next-line
  }, []);

  return <h1>Company company Dashboard</h1>;
};

export default CompanyDashboard;
