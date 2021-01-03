import React from "react";
import { Route, Redirect } from "react-router-dom";

const isAuth = () => {
  if (
    localStorage.getItem("admin_id") !== null &&
    localStorage.getItem("token") !== null
  ) {
    return true;
  }
};

const AuthVerifiedAdmin = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { message: "Usuário não autorizado" },
            }}
          />
        )
      }
    />
  );
};

export default AuthVerifiedAdmin;
