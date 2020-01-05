import React, { componets, useState } from "react";
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

function Login() {
  return (
    <form action="" method="post">
      <fieldset>
        <label for="user">Usuario</label>
        <input type="text" id="user" name="user" />
        <label for="pass">Contraseña</label>
        <input type="password" id="pass" name="pass" />
        <button>Entrar</button>
      </fieldset>
    </form>
  );
}

export default Header;
