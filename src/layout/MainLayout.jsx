import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = ({ show, setShow }) => {
  return (
    <>
      <Header show={show} setShow={setShow} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
