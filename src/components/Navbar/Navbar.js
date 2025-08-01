import React from "react";
import './Navbar.css';
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Navbar = ()=> (
    <ul className="Navbar">
        <li>
            <Link to="/">
                <Button>
                    Shop
                </Button>
            </Link>
        </li>
        <li>
            <Link to="/about">
                <Button>
                    About
                </Button>
            </Link>
        </li>
        <li>
           <Link to="/contact">
                <Button>
                    Contact
                </Button>   
           </Link>         
        </li>
        <li>
           <Link to="/blog">
                <Button>
                    Blog
                </Button>   
           </Link>         
        </li>
    </ul>
)

export default Navbar