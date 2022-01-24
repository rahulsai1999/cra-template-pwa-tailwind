import React, { Suspense, lazy } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// pages here
import Index from "./index";

const Version = lazy(() => import("./version"));
const ErrorPage = lazy(() => import("./error"));
const DashboardPage = lazy(() => import("./dashboard"));
const Maintenance = lazy(() => import("./maintenance"));

const AuthAdmin = lazy(() => import("./auth/admin"));
const Reset = lazy(() => import("./auth/reset"));
const Signup = lazy(() => import("./auth/signup"));
const Login = lazy(() => import("./auth/login"));
const Logout = lazy(() => import("./auth/logout"));

const UP = JSON.parse(localStorage.getItem("userProfile"));
const bg = UP ? (UP.settings.isDarkTheme ? "#12263F" : "white") : "white";

const Router = () => {
  return process.env.REACT_APP_MAINTENANCE_MODE ? (
    <Maintenance />
  ) : (
    <BrowserRouter>
      <Suspense
        fallback={<div style={{ height: "100vh", backgroundColor: bg }}></div>}
      >
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/auth/admin" component={AuthAdmin} exact />
          <Route path="/auth/signup" component={Signup} exact />
          <Route path="/auth/login" component={Login} exact />
          <Route path="/auth/reset" component={Reset} exact />
          <Route path="/auth/logout" component={Logout} exact />

          <Route path="/dashboard" component={DashboardPage} exact />

          <Route path="/version" component={Version} exact />

          {/* Error Routes */}
          <Route path="/no-connection">
            <ErrorPage type={504} />
          </Route>
          <Route path="*">
            <ErrorPage type={404} />
          </Route>
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
