import React, { useState } from "react";
import "./App.css";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Login from "../Login";
import BelajarLogin from "../BelajarLogin/BelajarLogin";

import DashboardAdmin from "../DashboardAdmin";
import DaftarPesananAdmin from "../DaftarPesananAdmin";
import PemesananAdmin from "../PemesananAdmin";
import DetailPemesanan from "../DetailPemesanan";

import DashboardPenyetuju from "../DashboardPenyetuju";
import DaftarPesananPenyetuju from "../DaftarPesananPenyetuju";
import Persetujuan from "../Persetujuan";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <Switch>
        {/* <Route path="/">
          <Login />
        </Route> */}
        {/* <Route path="/" exact component={Login} /> */}
        <Route path="/" exact component={BelajarLogin} />
        {/* <Route path="/dashboardAdmin" exact component={DashboardAdmin} /> */}
        <ProtectedRoute
          path="/dashboardAdmin"
          component={DashboardAdmin}
          isAuth={isAuth}
        />
        <Route
          path="/daftarPesananAdmin"
          exact
          component={DaftarPesananAdmin}
        />
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
