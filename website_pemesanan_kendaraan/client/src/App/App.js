import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../Login";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

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
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute
            path="/dashboardAdmin"
            component={DashboardAdmin}
            isAuth={isAuth}
          />
          {/* <Route path="/dashboardAdmin" exact component={DashboardAdmin} /> */}
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
    </div>
  );
}

export default App;
