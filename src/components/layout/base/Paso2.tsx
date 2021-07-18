import React from "react";
import { useForm } from "react-hook-form";
import Persona from "../../../utils/interfaces/persona";
import Error from "../../common/Error";
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
  } = useForm<Persona>({
    defaultValues: dataPersona,
  });

  const onSubmit = (form: Persona) => {
    updatePersona(form);
    handleNext();
  };

  const selectPlan = (id: string) => {
    updatePersona({ plan: id });
  };

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
              selectPlan={() => selectPlan("1")}
              selected={dataPersona.plan === "1"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="AVANZADO"
              precio="200"
              selectPlan={() => selectPlan("2")}
              selected={dataPersona.plan === "2"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="PREMIUM"
              precio="250"
              selectPlan={() => selectPlan("3")}
              selected={dataPersona.plan === "3"}
            />
          </div>
          <div className="col-3 col-sm-6 col-lg-3">
            <PlanBox
              titulo="FULL"
              precio="500"
              selectPlan={() => selectPlan("4")}
              selected={dataPersona.plan === "4"}
            />
          </div>
        </div>
        {errors && <Error error={errors} />}
        <br />
        <div className="text-end">
          <input className="btnForm" type="submit" value="CONTINUAR   >" />
        </div>
      </form>
    </div>
  );
};

export default Paso2;
