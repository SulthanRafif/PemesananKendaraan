import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./styles.css";
import { IconContext } from "react-icons";

function NavbarAdmin(props) {
  console.log("Id User Dari NavbarAdmin: ", props.idUser);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logout = () => {
    //
  };

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
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle">
                  Logout Admin
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Apakah anda ingin logout sebagai Admin?
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Tidak
                </button>
                <Link to="/">
                  <button
                    type="button"
                    onClick={logout}
                    className="btn btn-primary"
                    data-dismiss="modal"
                  >
                    Iya
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarAdmin;
