import React, { useState } from "react";
import "./App.css";

import ProtectedRoute from "../ProtectedRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../Login";
// import BelajarLogin from "../BelajarLogin/BelajarLogin";

import DashboardAdmin from "../DashboardAdmin";
import DaftarPesananAdmin from "../DaftarPesananAdmin";
import PemesananAdmin from "../PemesananAdmin";
import DetailPemesanan from "../DetailPemesanan";

import DashboardPenyetuju from "../DashboardPenyetuju";
import DaftarPesananPenyetuju from "../DaftarPesananPenyetuju";
import Persetujuan from "../Persetujuan";
import NavbarAdmin from "../NavbarAdmin";
import NavbarPenyetuju from "../NavbarPenyetuju";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  console.log("Set Is Auth Dari App: ", isAuth);

  const [level, setLevel] = useState("");

  const eventCreateLevel = (levelnya) => {
    setLevel(levelnya);
  };
  console.log("Level User Login: ", level);

  return (
    <Router>
      {isAuth && level === 3 ? (
        <NavbarAdmin />
      ) : (isAuth && level === 1) || (isAuth && level === 2) ? (
        <NavbarPenyetuju />
      ) : (
        <Login
          setIsAuth={() => {
            setIsAuth(true);
          }}
          onCreateLevel={eventCreateLevel}
        />
      )}
      <Switch>
        <ProtectedRoute
          path="/dashboardAdmin"
          exact
          component={DashboardAdmin}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/daftarPesananAdmin"
          exact
          component={DaftarPesananAdmin}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/pemesananAdmin"
          exact
          component={PemesananAdmin}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/detailPemesanan"
          exact
          component={DetailPemesanan}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/dashboardPenyetuju"
          exact
          component={DashboardPenyetuju}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/daftarPesananPenyetuju"
          exact
          component={DaftarPesananPenyetuju}
          isAuth={isAuth}
        />
        <ProtectedRoute
          path="/persetujuan"
          exact
          component={Persetujuan}
          isAuth={isAuth}
        />
      </Switch>
    </Router>
  );
};

export default App;
