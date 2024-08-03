import { useEffect, useState } from "react";
import "./App.css";
import Loginpopup from "./components/LoginPopup";
import MainRoute from "./routes/MainRoutes";

function App() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loading-screen">
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {show ? <Loginpopup show={show} setShow={setShow} /> : ""}
          <MainRoute show={show} setShow={setShow} />
        </>
      )}
    </>
  );
}

export default App;
