import React from "react";
import { Route, Redirect } from "react-router-dom";

// eslint-disable-next-line
function ProtectedRoute({
  dataIdUser: dataIdUser,
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
