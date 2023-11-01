import React, { useState } from "react";
import { AdmissionDropdown } from "./MenuItems";
import "./Dropdown.css";
function DropdownAdmission(){
    const [dropdown, setDropdown] = useState(false);
    return(
        <>
        <ul className= {dropdown ? "services-submenu clicked" : "services-submenu"} 
        onClick={ () => setDropdown(!dropdown)}>
            {AdmissionDropdown.map((item,index) => {
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
export default DropdownAdmission