import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboardPenyetuju",
    icon: <MdIcons.MdDashboard />,
    cName: "nav-text",
  },
  {
    title: "Daftar Persetujuan",
    path: "/daftarPesananPenyetuju",
    icon: <BsIcons.BsTable />,
    cName: "nav-text",
  },
  {
    title: "Daftar Pemesanan",
    path: "/daftarPesanan",
    icon: <BsIcons.BsTable />,
    cName: "nav-text",
  },
];
