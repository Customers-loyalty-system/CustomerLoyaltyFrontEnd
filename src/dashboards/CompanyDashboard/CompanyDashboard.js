import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Sidenav from "../Sidenav/Sidenav";
import Head from "../Head/Head";
import { Outlet } from "react-router-dom";

const CompanyDashboard = (props) => {
  const { token, user, logout } = useContext(AuthContext);

  useEffect(() => {
    if (!token || user.type !== "company") {
      window.location.href = "/login";

      logout();
    } else return;
    // eslint-disable-next-line
  }, []);
  const [sidenavOpen, setSidenavOpen] = useState(false);

  useEffect(() => {
    if (sidenavOpen) setSidenavOpen(false);
    // eslint-disable-next-line
  }, []);
  const links = [];
  return (
    <>
      <div
        className="m-0 h-screen font-sans antialiased font-normal text-base leading-default bg-gray-50 text-slate-500"
        onClick={() => {
          if (sidenavOpen) setSidenavOpen(false);
        }}
      >
        <Sidenav links={links} sidenavOpen={sidenavOpen} />
        <main className="ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200">
          <Head
            title={props.title}
            sidenavOpen={sidenavOpen}
            setSidenavOpen={setSidenavOpen}
          />
          <div className="w-full px-6 py-6 mx-auto"><Outlet/></div>
        </main>
      </div>
    </>
  );
};

export default CompanyDashboard;
