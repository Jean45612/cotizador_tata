import React from "react";
import { useForm } from "react-hook-form";
import length from "../../utils/validators/length";
import number from "../../utils/validators/number";
import Error from "../common/Error";

interface Persona {
  tipoDocumento: string;
  numeroDocumento: string;
  fechaNacimiento: string;
  celular: string;
  terminos: boolean;
  comunicaciones: boolean;
}

const FormInicio = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Persona>();

  const onSubmit = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className="formInicio">
      <h2 className="formInicio__titulo">
        Obtén tu
        <span className="formInicio__titulo--negrita"> seguro ahora</span>
      </h2>
      <p>Ingresa los datos para comenzar</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mx-0 mb-3">
          <div className="col-3 p-0">
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
          <div className="form-floating col-9 p-0 mb-0">
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
