import React from 'react';
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProyectoState from "./context/proyectos/ProyectoState";
import TareaState from "./context/tareas/TareaState";
import AlertaState from "./context/alertas/alertaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <Router>
            <Switch>
              <Route exact path="/MERNTask" component={Login} />
              <Route exact path="/MERNTask/nueva-cuenta" component={NuevaCuenta} />
              <Route exact path="/MERNTask/proyectos" component={Proyectos} />
            </Switch>
          </Router>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
