import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Sidenav from "../Sidenav/Sidenav";

const AdminDashboard = (props) => {
  // const navigate = useNavigate();
  // const { token, userType, logout } = useContext(AuthContext);
  // useEffect(() => {
  //   if (!token || userType !== "admin") {
  //     navigate("/login");
  //     logout();
  //   } else return;
  //   // eslint-disable-next-line
  // }, []);

  return (
    <>
      <div className="m-0  font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
        <Sidenav />
        <main class="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          
          <div>{props.children}</div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
