import React from "react";
import { useForm } from "react-hook-form";
import length from "../../../utils/validators/length";
import number from "../../../utils/validators/number";
import Error from "../../common/Error";
import Persona from "../../../utils/interfaces/persona";

const FormInicio = ({ handleNext, updatePersona, dataPersona }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Persona>({
    defaultValues: dataPersona,
  });

  const onSubmit = (form: Persona) => {
    updatePersona(form);

    fetch("https://randomuser.me/api")
      .then((response) => response.json())
      .then((data) => {
        let result = data.results[0];
        updatePersona({
          nombre: result.name.first,
          apePaterno: result.name.last,
          genero: result.gender === "male" ? "0" : "1",
        });
        handleNext();
      });
  };

  return (
    <div className="form">
      <h2 className="form__titulo">
        Obtén tu
        <span className="form__titulo--negrita"> seguro ahora</span>
      </h2>
      <p>Ingresa los datos para comenzar</p>
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
            type="date"
            className="form-control"
            placeholder="Fecha de nacimiento"
            {...register("fechaNacimiento", {
              required: true,
            })}
          />

          <label>Fecha de nacimiento</label>
        </div>

        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Celular"
            {...register("celular", {
              required: true,
              minLength: {
                value: 9,
                message: "9",
              },
              maxLength: {
                value: 15,
                message: "15",
              },
              validate: {
                number: number,
              },
            })}
          />
          <label>Celular</label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input form__check"
            type="checkbox"
            {...register("terminos", {
              required: true,
            })}
          />
          <label className="form__condiciones">
            Acepto la{" "}
            <span className="form__condiciones__descargar">
              Política de Protección de Datos Personales y los Términos y
              Condiciones.
            </span>
          </label>
        </div>

        <div className="form-check">
          <input
            className="form-check-input form__check"
            type="checkbox"
            {...register("comunicaciones", {
              required: true,
            })}
          />
          <label className="form__condiciones">
            Acepto la{" "}
            <span className="form__condiciones__descargar">
              Política de Envío de Comunicaciones Comerciales.
            </span>
          </label>
        </div>

        {errors && <Error error={errors} />}
        <br />
        <input className="btnForm" type="submit" value="COMENCEMOS" />
      </form>
    </div>
  );
};

export default FormInicio;
