//componets
import React from "react";
import ReactDOM from "react-dom";
//
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams, useHistory } from "react-router";

//componets//
//header
import "./css/componets/pc/commons/header.css";
import Header from "./componets/commons/header.js";
import "./css/componets/pc/commons/login.css";

//header//
//footer
import "./css/componets/pc/commons/footer.css";
import Footer from "./componets/commons/footer.js";
//footer//

//main
import "./css/componets/pc/pages/inicio.css";
import "./css/componets/pc/pages/contacto.css";
import "./css/componets/pc/pages/consultar.css";

import Inicio from "./componets/pages/inicio.js";
import Contacto from "./componets/pages/contacto.js";
import { Consultar } from "./componets/pages/consultar.js";

//main//

//componets//

//header
const headerElement = document.getElementById("header");
ReactDOM.render(<Header />, headerElement);
//header//
//footer
const footerElement = document.getElementById("footer");
ReactDOM.render(<Footer />, footerElement);
//footer//
//main
const mainElement = document.getElementById("main");

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route path="/consultar">
          <Consultar />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
function NotFound() {
  return <h3>Not Found</h3>;
}

ReactDOM.render(<App />, mainElement);
//main//
