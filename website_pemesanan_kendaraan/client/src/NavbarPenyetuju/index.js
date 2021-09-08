import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./styles.css";
import { IconContext } from "react-icons";
import Logout from "../Logout";

function NavbarPenyetuju({ idUser: IdUser, setIsAuth, onCreateIdUser }) {
  console.log("Id User Dari NavbarPenyetuju: ", IdUser);
  const eventCreateIsAuthnya = (isAuthnyaya) => {
    setIsAuth(isAuthnyaya);
    onCreateIdUser(null);
  };

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
                  <span>Logout Penyetuju</span>
                </button>
              </li>
            </ul>
          </nav>
        </IconContext.Provider>
      </div>
      <Logout
        onCreateIsAuthnya={eventCreateIsAuthnya}
        levelnyaUser={"Penyetuju"}
      />
    </div>
  );
}

export default NavbarPenyetuju;
