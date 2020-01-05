import React from "react";

function Consultar() {
  return (
    <React.Fragment>
      <section id="form_consultar" onChange={recalcular}>
        <fieldset className="grupo">
          <label htmlFor="name">Nombre</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" id="apellidos" name="apellidos" />
          <label id="label" htmlFor="edad">
            Rango de edad:
          </label>
          <input
            type="range"
            list="year"
            id="edad"
            step="5"
            min="10"
            max="50"
            onChange={mostrarValor}
          />
          <datalist id="year">
            <option value="10" />
            <option value="15" />
            <option value="20" />
            <option value="25" />
            <option value="30" />
            <option value="35" />
            <option value="40" />
            <option value="45" />
            <option value="50" />
          </datalist>
        </fieldset>
        <fieldset className="grupo">
          <label htmlFor="cod_postal">Codigo Postal</label>
          <input type="number" id="cod_postal" />
          <label htmlFor="pais">Lugar de nacimiento</label>
          <select id="pais">
            <option>España</option>
            <option>Otro</option>
          </select>
          <label htmlFor="sexo">Sexo</label>
          <select id="sexo">
            <option>Mujer</option>
            <option>Hombre</option>
          </select>
        </fieldset>
      </section>
      <section id="resultado">
        <fieldset>
          <label>Seguro basico</label>
          <input id="result1" value="10€" />
        </fieldset>
        <fieldset>
          <label>Seguro Reforzado</label>
          <input id="result2" value="20€" />
        </fieldset>
        <fieldset>
          <label>Seguro Premium</label>
          <input id="result3" value="30€" />
        </fieldset>
      </section>
    </React.Fragment>
  );
}
function mostrarValor() {
  let edad = document.getElementById("edad").value;
  let label = document.getElementById("label");
  if (edad == 50) {
    label.innerHTML = `Rango de edad: +${edad}`;
  } else {
    label.innerHTML = `Rango de edad: ${edad}`;
  }
  return "false";
}
function recalcular() {
  let edad = document.getElementById("edad").value;
  let pais = document.getElementById("pais").value;
  let sexo = document.getElementById("sexo").value;
  let incremento = 0;
  let basico = 10;
  let reforzado = 20;
  let premium = 30;
  if (edad == 50 || edad < 30) {
    incremento = incremento + 16.66;
  }
  if (pais !== "España") {
    incremento = incremento + 33.33;
  }
  if (sexo === "Hombre") {
    incremento = incremento + 33.33;
  }
  incremento = (incremento + 100) / 100;
  basico = Math.round(basico * incremento * 100) / 100;
  reforzado = Math.round(reforzado * incremento * 100) / 100;
  premium = Math.round(premium * incremento * 100) / 100;
  document.getElementById("result1").value = basico + "€";
  document.getElementById("result2").value = reforzado + "€";
  document.getElementById("result3").value = premium + "€";

  return "false";
}

export { Consultar };
