import React, {useContext} from "react";
import './Header.css';
import Navbar from '../Navbar/Navbar';
import { useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import CartContext from "../../context/CartContext";


const Header = () => {
    let { pathname } = useLocation();
    let title = ''
    const {carts} = useContext(CartContext);


    if (pathname === '/') title = 'Shop';
    if (pathname === '/about') title = 'About';
    if (pathname === 'blog') title = 'Blog';
    if (pathname === 'contact') title = 'Contact';
    if (pathname.includes('product')) title = 'Shop';
    // switch(pathname){
    //     case '/':
    //         title = 'Shop';
    //         break;
    //     case '/about':
    //         title = 'About';
    //         break;
    //     case '/blog':
    //         title = 'Blog';
    //         break;
    //     case '/contact':
    //         title = 'Contact';
    //         break;
    //     default:
    //         break;
    // }
    return(
        <div className="Header">
            <Navbar />
            <div className="Cart">
                <h4>{carts.length}</h4>
                <MdShoppingCart />
            </div>
            <h3>{title}</h3>
        </div>
    )
}

export default Header