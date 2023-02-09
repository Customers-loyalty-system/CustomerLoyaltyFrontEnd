import React, { useContext, useEffect,  useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Sidenav from "../Sidenav/Sidenav";
import Head from "../Head/Head";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const AdminDashboard = () => {
  const { token, user, logout } = useContext(AuthContext);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  const { pathname } = useLocation()
  
  let title= pathname.split('/')[2]

  useEffect(() => {
    if (sidenavOpen) setSidenavOpen(false);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!token || user.type !== "admin") {
      logout();
      window.location.href = "/login";
    } else return;
    // eslint-disable-next-line
  }, []);

  const links = [
    {
      target: "/admin/add",
      text: "Add new admin",
      icon: (
        <PersonAddAlt1Icon
          sx={{ color: "white", width: "15px", height: "15px" }}
        />
      ),
    },
    {
      target: "/admin/list",
      text: "Admins list",
      icon: (
        <FormatListBulletedIcon
          sx={{ color: "white", width: "15px", height: "15px" }}
        />
      ),

    },
  ];
  return (
    <>
      <div
        className="m-0 h-screen font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
        onClick={() => {
          if (sidenavOpen) setSidenavOpen(false);
        }}
      >
        <Sidenav links={links} sidenavOpen={sidenavOpen} setSidenavOpen={setSidenavOpen}  />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <Head
            title={title}
            sidenavOpen={sidenavOpen}
            setSidenavOpen={setSidenavOpen}
            links={links}
          />
          <div className="w-full px-6 py-6 mx-auto"> <Outlet/>

          </div>
        </main>
        <div className="m-0  font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500">
        <div className="ease-soft-in-out xl:ml-68.5 relative rounded-xl bg-gray-50 transition-all duration-200">
        < Footer/>
        </div>
        </div>
      </div>
    
    </>
  );
};

export default AdminDashboard;
