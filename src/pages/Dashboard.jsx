import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
            localStorage.removeItem("token");
            Swal.fire({
                icon: "success",
                text: "Logged Out succussfully",
              });
            navigate("/", { replace: true });
    }


  return (
    <>
      <h1>Welcome to Dashboard</h1>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  );
};

export default Dashboard;
