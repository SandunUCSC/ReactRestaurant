import React from "react";
import "./Home.css";
import Logo from "../components/Logo";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";



function Home() {
  return (
    <div className="home-container">
      <div className="home-nav">
        <Logo />
<div>
    <Link to="/Login">
    <Button colorScheme='blue' variant="outline">Login</Button>
    </Link>
    <Link to="/Register">
    <Button colorScheme='yellow' variant="outline">Register</Button>
    </Link>


</div>



      </div>
    </div>
  );
}

export default Home;
