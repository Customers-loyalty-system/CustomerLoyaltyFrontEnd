import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/Notifications/Notifications";

const Home = React.lazy(() => import("./pages/Home/Home"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const UserRegistration = React.lazy(() =>
  import("./pages/UserRegistration/UserRegistration")
);
const CompanyRegistration = React.lazy(() =>
  import("./pages/CompanyRegistration/CompanyRegistration")
);
const Company = React.lazy(() =>
  import("./dashboards/CompanyDashboard/CompanyDashboard")
);
const Admin = React.lazy(() =>
  import("./dashboards/AdminDashboard/AdminDashboard")
);
const User = React.lazy(() =>
  import("./dashboards/UserDashboard/UserDashboard")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userregister" element={<UserRegistration />} />
        <Route path="/companyregister" element={<CompanyRegistration />} />
        <Route path="/company" element={<Company />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User />} />
      </Routes>
      <Notification />
    </>
  );
};

export default App;
