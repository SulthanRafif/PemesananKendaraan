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

  const [IdUser, setIdUser] = useState("");

  const eventCreateIdUser = (IdnyaUser) => {
    setIdUser(IdnyaUser);
  };
  console.log("Id User: ", IdUser);

  return (
    <Router>
      {isAuth && level === 3 ? (
        <NavbarAdmin
          idUser={IdUser}
          setIsAuth={() => {
            setIsAuth(false);
          }}
          onCreateIdUser={eventCreateIdUser}
        />
      ) : (isAuth && level === 1) || (isAuth && level === 2) ? (
        <NavbarPenyetuju
          idUser={IdUser}
          setIsAuth={() => {
            setIsAuth(false);
          }}
          onCreateIdUser={eventCreateIdUser}
        />
      ) : (
        <Login
          setIsAuth={() => {
            setIsAuth(true);
          }}
          onCreateLevel={eventCreateLevel}
          onCreateIdUser={eventCreateIdUser}
        />
      )}
      <Switch>
        <ProtectedRoute
          path="/dashboardAdmin"
          exact
          component={DashboardAdmin}
          isAuth={isAuth}
          dataIdUser={IdUser}
        />
        <ProtectedRoute
          path="/daftarPesananAdmin"
          exact
          component={DaftarPesananAdmin}
          isAuth={isAuth}
          dataIdUser={IdUser}
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
          dataIdUser={IdUser}
        />
        <ProtectedRoute
          path="/daftarPesananPenyetuju"
          exact
          component={DaftarPesananPenyetuju}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        <ProtectedRoute
          path="/persetujuan"
          exact
          component={Persetujuan}
          isAuth={isAuth}
        />
        {/* <Route path="/persetujuan" exact component={Persetujuan} /> */}
      </Switch>
    </Router>
  );
};

export default App;
