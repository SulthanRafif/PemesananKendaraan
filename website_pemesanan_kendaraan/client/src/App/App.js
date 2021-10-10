import React, { useState } from "react";
import "./App.css";

import ProtectedRoute from "../ProtectedRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginRegister from "../LoginRegister";

import DashboardAdmin from "../DashboardAdmin";
import DaftarPesananAdmin from "../DaftarPesananAdmin";
import PemesananAdmin from "../PemesananAdmin";
import DetailPemesanan from "../DetailPemesanan";
import EditPesanan from "../EditPesanan";

import DashboardPenyetuju from "../DashboardPenyetuju";
import DaftarPesananPenyetuju from "../DaftarPesananPenyetuju";
import Persetujuan from "../Persetujuan";
import NavbarAdmin from "../NavbarAdmin";
import NavbarPenyetuju from "../NavbarPenyetuju";
import DaftarPesanan from "../DaftarPesanan";

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
        <LoginRegister
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
          levelUser={level}
        />
        <ProtectedRoute
          path="/daftarPesananAdmin"
          exact
          component={DaftarPesananAdmin}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        <ProtectedRoute
          path="/pemesananAdmin"
          exact
          component={PemesananAdmin}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        <ProtectedRoute
          path="/detailPemesanan"
          exact
          component={DetailPemesanan}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        <ProtectedRoute
          path="/daftarPesanan"
          exact
          component={DaftarPesanan}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        <ProtectedRoute
          path="/dashboardPenyetuju"
          exact
          component={DashboardPenyetuju}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
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
          path="/editPesanan"
          exact
          component={EditPesanan}
          isAuth={isAuth}
          dataIdUser={IdUser}
          levelUser={level}
        />
        {(isAuth && level === 1) || (isAuth && level === 2) ? (
          <Route path="/persetujuan" exact component={Persetujuan} />
        ) : (
          <></>
        )}
      </Switch>
    </Router>
  );
};

export default App;
