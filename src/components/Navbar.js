import "./NavbarStyle.css";
import { useState} from "react";
import { MenuItems } from "./MenuItems";
import Dropdown from "./Dropdown";
import DropdownAdmission from "./DropdownAdmission";

function Navbar(){
    const [state, setState] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [dropdownAdmission, setDropdownAdmission] = useState(false);

    const handleClick = () =>{
        setState(!state)
    }

        return(
            <>
            <nav className="NavbarItems">
                <h1 className="navbar-logo">InsightEdu</h1>

                <div className="menu-icons" onClick={handleClick}>
                    <i className= {state ? "fas fa-times" : "fas fa-bars"}></i>

                </div>
                <ul className={state ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) => {
                        if(item.title === "Programs"){
                            return(
                                <li key={index}
                                onMouseEnter={()=> setDropdown(true)}
                                onMouseLeave={()=> setDropdown(false)}
                                >
                                    <a className={item.cName} href="/">
                                        <i className={item.icon}></i>{item.title}
                                    
                                    </a>
                                    {dropdown && <Dropdown/>}
                                </li>
                                
                            )
                        }
                        if(item.title === "Admission"){
                            return(
                                <li key={index}
                                onMouseEnter={()=> setDropdownAdmission(true)}
                                onMouseLeave={()=> setDropdownAdmission(false)}
                                >
                                <a className={item.cName} href="/">
                                    <i className={item.icon}></i>{item.title}
                                </a>
                                    {dropdownAdmission && <DropdownAdmission/>}
                                </li>
                                
                            )
                        }
                        return(
                            <li key={index}>
                                <a className={item.cName} href="/"><i className={item.icon}></i>{item.title}</a>
                            </li>

                        );
                    })}
                    
                    <button>Sign Up</button>

                </ul>

                

            </nav>
            </>
            

        );
}

export default Navbar;