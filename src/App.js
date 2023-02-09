import "./App.css";
import React, { Suspense} from "react";
import { Route, Routes } from "react-router-dom";
import Notification from "./components/Notifications/Notifications";
import Login from "./pages/Login/Login"

const Home = React.lazy(() => import("./pages/Home/Home"));
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
const Admin = React.lazy(()=> import( "./dashboards/AdminDashboard/AdminDashboard"))
const Add = React.lazy(()=> import( "./dashboards/AdminDashboard/components/Add"))
const List = React.lazy(()=> import( "./dashboards/AdminDashboard/components/List"))


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Suspense><Home /></Suspense>} />
        <Route path="/login" element={<Suspense><Login /></Suspense>} />
        <Route path="/userregister" element={<Suspense><UserRegistration /></Suspense>} />
        <Route path="/companyregister" element={<Suspense><CompanyRegistration /></Suspense> } />
        <Route path="/company" element={<Suspense><Company /></Suspense>} ></Route>
        <Route path="/user" element={<Suspense><User /> </Suspense>} ></Route>
        <Route path="admin" element={<Suspense><Admin /> </Suspense>} > 
          <Route path="add" element={<Suspense><Add /> </Suspense>} /> 
          <Route path="list" element={<List />} /> 
        </Route>
      </Routes>
      <Notification />
    </>
  );
};

export default App;
