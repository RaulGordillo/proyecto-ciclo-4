import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../login/login";
import Inicio from "../index/index";
import PrivateRouter from "../auth/privaterouter";
import Empleados from "../empleados/empleados.buscar";

export default function AppRoutes() {
  return (
    <Router>
      <Switch>
        <Route exact path={["/login"]} component={Login} />
        <PrivateRouter exact path={ [ "/empleados" ] } component={ Empleados } />
        <Route exact path={["/"]} component={Inicio} />
        <Route exact path={["/index"]} component={Inicio} />
        <Route
          path={"*"}
          component={() => (
            <h1 style={{ marginTop: 300 }}>
              404
              <br />
              Página no encontrada
            </h1>
          )}
        />
      </Switch>
    </Router>
  );
}