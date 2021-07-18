import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Persona from "../../../utils/interfaces/persona";
import iconCorrect from "../../../assets/images/iconos/gl_correct.png";

interface interfacePlan {
  titulo: string;
  precio: string;
  periodo?: string;
  selectPlan: any;
  selected: boolean;
}

const PlanBox = ({
  titulo,
  precio,
  periodo = "mensual",
  selectPlan,
  selected,
}: interfacePlan) => {
  return (
    <div
      className={"plan__box " + (selected && "plan__box--selected")}
      onClick={() => selectPlan()}
    >
      {selected ? (
        <img
          src={iconCorrect}
          alt=""
          className="plan__box__img plan__box__img--selected"
          loading="lazy"
        />
      ) : (
        <span className="plan__box__img"></span>
      )}
      <p className="plan__box__titulo">{titulo}</p>
      <p className="plan__box__precio">{precio}</p>
      <p className="plan__box__periodo">{periodo}</p>
    </div>
  );
};

const Paso2 = ({ handleNext, handleBack, updatePersona, dataPersona }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm<Persona>({
    defaultValues: dataPersona,
  });

  const watchPlan = watch("plan", dataPersona.plan);

  const onSubmit = (form: Persona) => {
    updatePersona(form);
    handleNext();
  };

  useEffect(() => {
    register("plan", { required: true });
  }, [register]);

  return (
    <div className="formInicio">
      <p>
        <span className="backIcon" onClick={handleBack}>
          {"<"}
        </span>
        <b className="color-celeste ps-3">PASO 2</b> DE 7
      </p>
      <h2 className="formInicio__titulo">
        Elige
        <span className="formInicio__titulo--negrita"> tu protección</span>
      </h2>
      <p className="mt-3">Selecciona tu plan de salud ideal.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-3">
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="BÁSICO"
              precio="160"
              selectPlan={() => setValue("plan", "1")}
              selected={watchPlan === "1"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="AVANZADO"
              precio="200"
              selectPlan={() => setValue("plan", "2")}
              selected={watchPlan === "2"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="PREMIUM"
              precio="250"
              selectPlan={() => setValue("plan", "3")}
              selected={watchPlan === "3"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="FULL"
              precio="500"
              selectPlan={() => setValue("plan", "4")}
              selected={watchPlan === "4"}
            />
          </div>
        </div>
        {errors.plan && (
          <div className="alert alert-danger mb-0 mt-4">
            <p className="alert__text">Debe seleccionar un plan.</p>
          </div>
        )}
        <br />
        <div className="text-end">
          <input className="btnForm" type="submit" value="CONTINUAR   >" />
        </div>
      </form>
    </div>
  );
};

export default Paso2;
