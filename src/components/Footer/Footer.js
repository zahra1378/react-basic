import React, {useContext} from "react";
import './Footer.css';
import ThemeContext from "../../context/ThemeContext";


const Footer = () => {
    const themeValues = useContext(ThemeContext)
    return(
        <div className="Footer">
            <h5>Developed By Zahra</h5>
            <button className="Green" onClick={() => themeValues.setActiveTheme('green')}>Green</button>
            <button className="Blue" onClick={() => themeValues.setActiveTheme('blue')}>Blue</button>
        </div>
    )
}

export default Footer