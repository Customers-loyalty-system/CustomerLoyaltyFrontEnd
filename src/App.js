import "./App.css";
import React, {Suspense} from "react";
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

const User = React.lazy(() =>
  import("./dashboards/UserDashboard/UserDashboard")
);
const AddAdmin = React.lazy(() =>
  import("./dashboards/AdminDashboard/components/Add")
);
const ListAdmin = React.lazy(() =>
  import("./dashboards/AdminDashboard/components/List")
);
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/login" element={<Suspense><Login /></Suspense>} />
        <Route path="/userregister" element={<Suspense><UserRegistration /></Suspense>} />
        <Route path="/companyregister" element={<Suspense><CompanyRegistration /></Suspense> } />
        <Route path="/company" element={<Suspense><Company /></Suspense>} />
        <Route path="/user" element={<Suspense><User /> </Suspense>} />
        <Route path="/admin" element={<Suspense><AddAdmin /></Suspense>   } />
        <Route path="/admin-list" element={<Suspense><ListAdmin /></Suspense>   } />

      </Routes>
      <Notification />
    </>
  );
};

export default App;
