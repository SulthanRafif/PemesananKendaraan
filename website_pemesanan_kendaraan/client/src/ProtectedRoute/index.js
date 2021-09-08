import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({
  // eslint-disable-next-line
  dataIdUser: dataIdUser,
  // eslint-disable-next-line
  isAuth: isAuth,
  component: Component,
  ...rest
}) {
  console.log("Tampilkan ID di Protected Route: ", dataIdUser);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuth) {
          return <Component idUser={dataIdUser} />;
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
