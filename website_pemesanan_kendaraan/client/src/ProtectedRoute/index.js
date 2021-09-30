import React from "react";
import { Route, Redirect } from "react-router-dom";
import Persetujuan from "../Persetujuan";

function ProtectedRoute({
  // eslint-disable-next-line
  dataIdUser: dataIdUser,
  // eslint-disable-next-line
  isAuth: isAuth,
  levelUser: LevelUser,
  component: Component,
  ...rest
}) {
  console.log("Tampilkan ID di Protected Route: ", dataIdUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          if (Component === Persetujuan) {
            console.log(
              "Component Persetujuan di Tampilkan Melalui Protected Route"
            );
            return <Component />;
          } else {
            return <Component idUser={dataIdUser} levelUser={LevelUser} />;
          }
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
