import React, { useContext, useEffect,  useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import Sidenav from "../Sidenav/Sidenav";
import Head from "../Head/Head";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import LoopIcon from '@mui/icons-material/Loop'
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DescriptionIcon from '@mui/icons-material/Description';

const AdminDashboard = () => {
  const { token, user, logout } = useContext(AuthContext);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  

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
      target: "/admin/",
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
    {
      target: "/admin/Update",
      text: "updateadmin",
      icon: (
        <LoopIcon sx={{ color: "white", width: "18px", height: "18px" }} /> 
      ),

    },
    {
      target: "/admin/activities",
      text: " Activities",
      icon: (
       < NoteAltIcon sx={{ color: "white", width: "18px", height: "18px" }} />
      ),

    },
    {
      target: "/admin/addbill",
      text: " addbill",
      icon: (
        <DescriptionIcon sx={{ color: "white", width: "18px", height: "18px" }} />
       
      ),

    },
    {
      target: "/admin/memberrelation",
      text: " member relation",
      icon: (
        <DescriptionIcon sx={{ color: "white", width: "18px", height: "18px" }} />
       
      ),

    }
  ];
  return (
    <>
      <div
        className="m-0 h-auto min-h-screen  h-screen font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
        onClick={() => {
          if (sidenavOpen) setSidenavOpen(false);
        }}
      >
        <Sidenav links={links} sidenavOpen={sidenavOpen} setSidenavOpen={setSidenavOpen}  />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <Head
            sidenavOpen={sidenavOpen}
            setSidenavOpen={setSidenavOpen}
          />
          <div className="w-full px-6 py-6 mx-auto  "> <Outlet/>

          </div>
        </main>
      </div>
    
    </>
  );
};

export default AdminDashboard;
