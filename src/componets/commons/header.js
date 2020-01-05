import React, { componets, useState } from "react";
import Login from "./login.js";
//form
import "../../css/componets/pc/commons/login.css";
// import Login from "../../componets/commons/login";
//form//

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <nav>
      <a href="/">Inicio </a>
      <a href="/consultar">Consultar </a>
      <a href="/contacto">Contacto</a>
      <a onClick={() => setIsFormOpen(true)}>Log in</a>
      {isFormOpen && <Login />}
    </nav>
  );
}

export default Header;
