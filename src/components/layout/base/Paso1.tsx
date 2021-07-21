import React from "react";
import { useForm } from "react-hook-form";
import Persona from "../../../utils/interfaces/persona";
import length from "../../../utils/validators/length";
import number from "../../../utils/validators/number";
import Error from "../../common/Error";

const Paso1 = ({ handleNext, handleBack, updatePersona, dataPersona }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Persona>({
    defaultValues: dataPersona,
  });

  const onSubmit = (form: Persona) => {
    updatePersona(form);
    handleNext();
  };

  return (
    <div className="form">
      <p>
        <span className="backIcon" onClick={handleBack}>
          {"<"}
        </span>
        <b className="color-celeste ps-3">PASO 1</b> DE 7
      </p>
      <h2 className="form__titulo">
        Hola,
        <span className="form__titulo--negrita">
          {" " + dataPersona.nombre}
        </span>
      </h2>
      <p>Valida que los datos sean correctos.</p>

      <h5 className="fontInherit">Datos personales del titular</h5>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <div className="col-3 pe-0">
            <select
              className="form-select h-100"
              placeholder="Tipo de documento"
              {...register("tipoDocumento", {
                required: true,
              })}
            >
              <option value="1">DNI</option>
            </select>
          </div>
          <div className="form-floating col-9 ps-0 mb-0">
            <input
              type="text"
              className="form-control"
              placeholder="Nro de Documento"
              {...register("numeroDocumento", {
                required: true,
                validate: {
                  number: number,
                  length: (value) => length(value, 8) || "8",
                },
              })}
            />
            <label>Nro de Documento</label>
          </div>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
            {...register("nombre", {
              required: true,
            })}
          />

          <label>Nombres</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido paterno"
            {...register("apePaterno", {
              required: true,
            })}
          />

          <label>Apellido Paterno</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Apellido materno"
            {...register("apeMaterno", {
              required: true,
            })}
          />

          <label>Apellido Materno</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            placeholder="Fecha de nacimiento"
            {...register("fechaNacimiento", {
              required: true,
            })}
          />

          <label>Fecha de nacimiento</label>
        </div>

        <label>Género</label>
        <div className="form-check mt-2">
          <input
            className="form-check-input form__check"
            type="radio"
            {...register("genero", {
              required: true,
            })}
            value="0"
          />
          <label className="form-check-label">Masculino</label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input form__check"
            type="radio"
            {...register("genero", {
              required: true,
            })}
            value="1"
          />
          <label className="form-check-label">Femenino</label>
        </div>

        <br />
        <label>¿A quién vamos a asegurar?</label>
        <div className="form-check mt-2">
          <input
            className="form-check-input form__check"
            type="radio"
            {...register("seguro", {
              required: true,
            })}
            value="0"
          />
          <label className="form-check-label">Solo a mí</label>
        </div>

        <div className="form-check mt-2">
          <input
            className="form-check-input form__check"
            type="radio"
            {...register("seguro", {
              required: true,
            })}
            value="1"
          />
          <label className="form-check-label">A mí y a mi familia</label>
        </div>

        {errors && <Error error={errors} />}
        <br />
        <div className="text-end">
          <input className="btn btn__form" type="submit" value="CONTINUAR   >" />
        </div>
      </form>
    </div>
  );
};

export default Paso1;
