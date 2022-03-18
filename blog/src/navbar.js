import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <>
    <nav>
        <ul>
            <li/><Link to="/">Home</Link>
            <li/><Link to="/about">About</Link>
            <li/><Link to="/articles">Articles</Link>
        </ul>
    </nav>
    </>    
)

export default NavBar;