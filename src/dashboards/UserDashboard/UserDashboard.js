import { useContext,useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { token, userType,logout } = useContext(AuthContext);
  useEffect(() => {
    if (!token || userType !== 'user') {
        navigate("/login")
        logout()
    }
    else return;
    // eslint-disable-next-line
  }, []);
  return <div>user UserDashboard</div>;
};

export default UserDashboard;
