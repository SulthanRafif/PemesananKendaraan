import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboardAdmin",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Daftar Pemesanan",
    path: "/daftarPesananAdmin",
    icon: <BsIcons.BsTable />,
    cName: "nav-text",
  },
];
