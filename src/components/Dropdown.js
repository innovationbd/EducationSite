import React, { useState } from "react";
import { ProgramsDropdown } from "./MenuItems";
import "./Dropdown.css";
function Dropdown(){
    const [dropdown, setDropdown] = useState(false);
    
    return(
        <>
        <ul className= {dropdown ? "services-submenu clicked" : "services-submenu"} 
        onClick={ () => setDropdown(!dropdown)}>
            {ProgramsDropdown.map((item,index) => {
                return(
                    <li key={index}>
                        <a  
                        href="/" 
                        className={item.cName}
                        onClick={ () => setDropdown(false)}
                        >
                        {item.title}
                        
                        </a>
                    </li>
                );
            })}
        </ul> 
        </>
    );
}
export default Dropdown