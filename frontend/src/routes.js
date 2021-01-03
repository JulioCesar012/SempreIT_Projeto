import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginUser from "./pages/login_user";
import LoginAdmin from "./pages/login_admin";

import DashboardUser from "./pages/dashboard_user";
import DashboardAdmin from "./pages/dashboard_admin";

import UserContent from "./pages/user_content";
import AuthVerifiedUser from "./authVerified/authVerifiedUser";
import AuthVerifiedAdmin from "./authVerified/authVerifiedAdmin";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LoginUser} />
          <Route path="/login_admin" exact component={LoginAdmin} />
          <AuthVerifiedAdmin
            path="/dashboard/:admin_id"
            exact
            component={DashboardAdmin}
          />
          <AuthVerifiedAdmin
            path="/dashboard_users"
            exact
            component={UserContent}
          />
          <AuthVerifiedUser
            path="/dashboard_user/:user_id"
            exact
            component={DashboardUser}
          />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </>
  );
}
