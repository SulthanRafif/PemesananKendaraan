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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  console.log("Set Is Auth Dari App: ", isAuth);

  return (
    <Router>
      {!isAuth ? (
        <Login
          setIsAuth={() => {
            setIsAuth(true);
            console.log("Set Is Auth Dari Login: ", isAuth);
          }}
        />
      ) : (
        <NavbarAdmin />
      )}
      <Switch>
        {/* <Route path="/">
          {!isAuth ? console.log("Belum Login") : <DashboardAdmin />}
        </Route> */}
        {/* <Route path="/login">
          <Login
            setIsAuth={() => {
              setIsAuth(true);
              console.log("Set Is Auth Dari Login: ", isAuth);
            }}
          />
        </Route> */}
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
        {/* <Route
          path="/daftarPesananAdmin"
          exact
          component={DaftarPesananAdmin}
        /> */}
        <Route path="/pemesananAdmin" exact component={PemesananAdmin} />
        <Route path="/detailPemesanan" exact component={DetailPemesanan} />
        <Route
          path="/dashboardPenyetuju"
          exact
          component={DashboardPenyetuju}
        />
        <Route
          path="/daftarPesananPenyetuju"
          exact
          component={DaftarPesananPenyetuju}
        />
        <Route path="/persetujuan" exact component={Persetujuan} />
      </Switch>
    </Router>
  );
}

export default App;
