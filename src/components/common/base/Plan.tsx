import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import imgMoney from "../../../assets/images/Illustration.png";

interface Props {
  cobertura: string;
  planTipo: string;
  beneficios: Array<number>;
}

const Plan = ({ cobertura, planTipo, beneficios }: Props) => {
  return (
    <>
      <div className="proteccion__box">
        <p className="proteccion__box__title">Cuentas con estos beneficios:</p>
        <div className="proteccion__box__content">
          <div className="proteccion__box__content__header">
            <div>
              <p>Cobertura máxima</p>
              <h2 className="proteccion__box__content__header__precio">
                S/{cobertura}MM
              </h2>
              <span className="proteccion__box__content__header__plan">
                PLAN {planTipo}
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
            <h5
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(1) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              Lima <span>(zona de cobertura)</span>
            </h5>
            <h5
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(2) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              +30 clínicas <span>(en red afiliada)</span>
            </h5>
            <p
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(3) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              Médico a domicilio
            </p>
            <p
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(4) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              Chequeos preventivos
            </p>
            <p
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(5) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
              <FontAwesomeIcon icon={faHeart} />
              Reembolso nacional
            </p>
            <p
              className={
                "proteccion__box__content__beneficios__list " +
                (beneficios.includes(6) &&
                  "proteccion__box__content__beneficios__list--selected")
              }
            >
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
          <div id="accordion-servicios" className="accordion-collapse collapse">
            <div className="accordion-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur fugit repellendus optio rerum nisi, illum numquam et
              in atque quis sed voluptatem, animi sapiente! Eum totam laudantium
              illum neque distinctio?
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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
              doloremque, suscipit praesentium, delectus, hic nemo aperiam
              distinctio iste fuga consectetur nostrum! Illo natus error,
              repellat id voluptates ipsam esse. Ullam.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plan;
