import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Persona from "../../../utils/interfaces/persona";
import iconCorrect from "../../../assets/images/iconos/gl_correct.png";
import imgMoney from "../../../assets/images/Illustration.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

        <div className="proteccion__box">
          <p className="proteccion__box__title">
            Cuentas con estos beneficios:
          </p>
          <div className="proteccion__box__content">
            <div className="proteccion__box__content__header">
              <div>
                <p>Cobertura máxima</p>
                <h2 className="proteccion__box__content__header__precio">
                  S/1MM
                </h2>
                <span className="proteccion__box__content__header__plan">
                  PLAN BÁSICO
                </span>
              </div>
              <div className="proteccion__box__content__container__img">
                <img
                  className="proteccion__box__content__img"
                  src={imgMoney}
                  alt=""
                />
              </div>
            </div>
            <div className="proteccion__box__content__beneficios">
              <h5 className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                Lima <span>(zona de cobertura)</span>
              </h5>
              <h5 className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                +30 clínicas <span>(en red afiliada)</span>
              </h5>
              <p className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                Médico a domicilio
              </p>
              <p className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                Chequeos preventivos
              </p>
              <p className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                Reembolso nacional
              </p>
              <p className="proteccion__box__content__beneficios__list">
                <FontAwesomeIcon icon={faHeart} />
                Reembolso internacional
              </p>
            </div>
          </div>
        </div>

        <div className="accordion accordion-flush my-4">
          <h5 className="form__titulo">
            Revisa nuestros <br />
            <span className="form__titulo--negrita">
              {" "}
              servicios y exclusiones
            </span>
          </h5>
          <br />
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-servicios"
                aria-expanded="false"
                aria-controls="accordion-servicios"
              >
                Servicios brindados
              </button>
            </h2>
            <div
              id="accordion-servicios"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur fugit repellendus optio rerum nisi, illum numquam et
                in atque quis sed voluptatem, animi sapiente! Eum totam
                laudantium illum neque distinctio?
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#accordion-exclusiones"
                aria-expanded="false"
                aria-controls="accordion-exclusiones"
              >
                Exclusiones
              </button>
            </h2>
            <div
              id="accordion-exclusiones"
              className="accordion-collapse collapse"
            >
              <div className="accordion-body">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet doloremque, suscipit praesentium, delectus, hic nemo
                aperiam distinctio iste fuga consectetur nostrum! Illo natus
                error, repellat id voluptates ipsam esse. Ullam.
              </div>
            </div>
          </div>
        </div>

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
          <input className="btnForm" type="submit" value="COMPRAR PLAN" />
        </div>
      </form>
    </div>
  );
};

export default Paso2;
