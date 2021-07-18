import React from "react";

const StepFinal = () => {
  return (
    <div className="final__step">
      <h2 className="formInicio__titulo">
        ¡Gracias por
        <span className="formInicio__titulo--negrita">
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
        <button className="btnForm btnForm--final" type="button">
          IR A SALUD
        </button>
      </div>
    </div>
  );
};

export default StepFinal;