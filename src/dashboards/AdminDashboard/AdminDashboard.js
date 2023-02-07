import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { token, userType, logout } = useContext(AuthContext);
  useEffect(() => {
    if (!token || userType !== "admin") {
      navigate("/login");
      logout()
    } else return;
    // eslint-disable-next-line
  }, []);

  return <h1>Admin AdminDashboard</h1>;
};

export default AdminDashboard;
