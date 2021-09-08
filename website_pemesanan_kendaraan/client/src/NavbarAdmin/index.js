import React, { useState } from "react";
import Logout from "../Logout";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./styles.css";
import { IconContext } from "react-icons";

function NavbarAdmin({ idUser: IdUser, setIsAuth, onCreateIdUser }) {
  console.log("Id User Dari NavbarAdmin: ", IdUser);
  const eventCreateIsAuthnya = (isAuthnyaya) => {
    setIsAuth(isAuthnyaya);
    onCreateIdUser(null);
  };

  // console.log("Status Auth Dari NavbarAdmin Setelah Logout", isAuthnya);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div>
      <div className="isi">
        <IconContext.Provider value={{ color: "#fff" }}>
          <div className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars onClick={showSidebar} />
            </Link>
          </div>
          <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <ul className="nav-menu-items" onClick={showSidebar}>
              <li className="navbar-toggle">
                <Link to="#" className="menu-bars">
                  <AiIcons.AiOutlineClose />
                </Link>
              </li>
              {SidebarData.map((item, index) => {
                return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
              })}
              <li className="nav-text">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="styleButton"
                >
                  <RiIcons.RiLogoutBoxFill />
                  <span>Logout Admin</span>
                </button>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
      <Logout onCreateIsAuthnya={eventCreateIsAuthnya} />
    </div>
  );
}

export default NavbarAdmin;
