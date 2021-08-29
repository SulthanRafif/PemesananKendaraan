import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from "../Login";

import DashboardAdmin from "../DashboardAdmin";
import DaftarPesananAdmin from "../DaftarPesananAdmin";
import PemesananAdmin from "../PemesananAdmin";
import DetailPemesanan from "../DetailPemesanan";

import DashboardPenyetuju from "../DashboardPenyetuju";
import DaftarPesananPenyetuju from "../DaftarPesananPenyetuju";
import Persetujuan from "../Persetujuan";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>

        <Switch>
          <Route path="/dashboardAdmin" exact component={DashboardAdmin} />
        </Switch>
        <Switch>
          <Route
            path="/daftarPesananAdmin"
            exact
            component={DaftarPesananAdmin}
          />
        </Switch>
        <Switch>
          <Route path="/pemesananAdmin" exact component={PemesananAdmin} />
        </Switch>
        <Switch>
          <Route path="/detailPemesanan" exact component={DetailPemesanan} />
        </Switch>

        <Switch>
          <Route
            path="/dashboardPenyetuju"
            exact
            component={DashboardPenyetuju}
          />
        </Switch>
        <Switch>
          <Route
            path="/daftarPesananPenyetuju"
            exact
            component={DaftarPesananPenyetuju}
          />
        </Switch>
        <Switch>
          <Route path="/persetujuan" exact component={Persetujuan} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
