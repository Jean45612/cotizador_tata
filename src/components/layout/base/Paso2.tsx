import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Persona from "../../../utils/interfaces/persona";
import iconCorrect from "../../../assets/images/iconos/gl_correct.png";
import { Tab } from "react-bootstrap";
import Plan from "../../common/base/Plan";

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
    <div className="form">
      <p>
        <span className="backIcon" onClick={handleBack}>
          {"<"}
        </span>
        <b className="color-celeste ps-3">PASO 2</b> DE 7
      </p>
      <h2 className="form__titulo">
        Elige
        <span className="form__titulo--negrita"> tu protección</span>
      </h2>
      <p className="mt-3">Selecciona tu plan de salud ideal.</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Tab.Container>
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

          <br />
          <Tab.Content>
            <Tab.Pane active={watchPlan === "1"}>
              <Plan cobertura="1" planTipo="BÁSICO" beneficios={[1, 2]} />
            </Tab.Pane>
            <Tab.Pane active={watchPlan === "2"}>
              <Plan
                cobertura="5"
                planTipo="AVANZADO"
                beneficios={[1, 2, 3, 4]}
              />
            </Tab.Pane>
            <Tab.Pane active={watchPlan === "3"}>
              <Plan
                cobertura="10"
                planTipo="PREMIUM"
                beneficios={[1, 2, 3, 4, 5]}
              />
            </Tab.Pane>
            <Tab.Pane active={watchPlan === "4"}>
              <Plan
                cobertura="20"
                planTipo="FULL"
                beneficios={[1, 2, 3, 4, 5, 6]}
              />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>

        <br />

        {errors.plan && (
          <div className="alert alert-danger mb-0 mt-4">
            <p className="alert__text">Debe seleccionar un plan.</p>
          </div>
        )}

        <div className="text-end mb-5">
          <input
            className="btn text-primary mx-3"
            type="button"
            value="ENVIAR COTIZACIÓN POR CORREO"
          />
          <input className="btn btn__form" type="submit" value="COMPRAR PLAN" />
        </div>
      </form>
    </div>
  );
};

export default Paso2;
