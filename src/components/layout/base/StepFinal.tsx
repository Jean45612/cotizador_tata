import React from "react";

const StepFinal = () => {
  return (
    <div className="final__step">
      <h2 className="form__titulo">
        ¡Gracias por
        <span className="form__titulo--negrita">
          {" "}
          confiar en nosotros!
        </span>
      </h2>
      <p>
        Queremos conocer mejor la salud de los asegurado. Un asesor{" "}
        <b>se pondrá en contacto</b> contigo en las siguientes <b>48 horas.</b>
      </p>
        <br />
      <div className="text-end">
        <button className="btn btn__form btn__form--final" type="button">
          IR A SALUD
        </button>
      </div>
    </div>
  );
};

export default StepFinal;
