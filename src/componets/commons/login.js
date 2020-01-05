import React, { componets } from "react";

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
export default Login;
