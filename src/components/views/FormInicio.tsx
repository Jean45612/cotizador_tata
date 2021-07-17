import React from "react";

const FormInicio = () => {
  return (
    <div className="formInicio">
      <h2 className="formInicio__titulo">
        Obtén tu
        <span className="formInicio__titulo--negrita"> seguro ahora</span>
      </h2>
      <p>Ingresa los datos para comenzar</p>
      <form action="">
        <div className="row mx-0 mb-3">
          <div className="col-3 p-0">
            <select className="form-select h-100">
              <option value="dni">DNI</option>
            </select>
          </div>
          <div className="form-floating col-9 p-0 mb-0">
            <input
              type="text"
              className="form-control"
              placeholder="Nro de Documento"
            />
            <label>Nro de Documento</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de nacimiento"
          />
          <label>Fecha de nacimiento</label>
        </div>

        <div className="form-floating mb-3">
          <input type="text" className="form-control" placeholder="Celular" />
          <label>Celular</label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form__condiciones">
            Acepto la{" "}
            <span className="form__condiciones__descargar">
              Política de Protección de Datos Personales y los Términos y
              Condiciones.
            </span>
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form__condiciones">
            Acepto la{" "}
            <span className="form__condiciones__descargar">
              Política de Envío de Comunicaciones Comerciales.
            </span>
          </label>
        </div>

        <br />
        <button className="btnForm">COMENCEMOS</button>
      </form>
    </div>
  );
};

export default FormInicio;
