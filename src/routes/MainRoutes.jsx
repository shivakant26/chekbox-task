import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../components/Home";
import Student from "../components/Studnet";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
const MainRoute = ({ show, setShow }) => {
  const Token = localStorage.getItem("token");
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout show={show} setShow={setShow} />}>
          <Route index element={<Home />} />
          <Route path="/student" element={<Student />} />
        </Route>
        {Token && (
          <>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
            </Route>
          </>
        )}
        <Route
          path="*"
          element={<Navigate to={Token ? "/dashboard" : "/"} />}
        />
      </Routes>
    </>
  );
};

export default MainRoute;
