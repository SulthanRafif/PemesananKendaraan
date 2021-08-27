import React, {useState} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from '../Login';
import Dashboard from '../Dashboard';

import NavbarAdmin from '../NavbarAdmin';
import DaftarPesananAdmin from '../DaftarPesananAdmin';
import PemesananAdmin from '../PemesananAdmin';

import NavbarPenyetuju from '../NavbarPenyetuju';
import DaftarPesananPenyetuju from '../DaftarPesananPenyetuju';
import Persetujuan from '../Persetujuan';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
