import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate()
  
  useEffect(() => {
    navigate('/login')
  }, [])
  return (
    <div>
    </div>
  );
}

export default HomePage;
