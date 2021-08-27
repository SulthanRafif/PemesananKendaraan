import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboardPenyetuju",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Daftar Pemesanan",
    path: "/daftarPesananPenyetuju",
    icon: <BsIcons.BsTable />,
    cName: "nav-text",
  },
];
