import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const handleLogout = () =>{
            localStorage.removeItem("token");
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
