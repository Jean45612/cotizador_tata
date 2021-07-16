import React from "react";
import imgMobile from "../../assets/images/iconos/gl_mobile-20x20.png";
import imgShield from "../../assets/images/iconos/gl_shield-20x20.png";
import imgIlustration from "../../assets/images/Illustration-1.png";

interface Props {
  img: string;
  texto: string;
}

const BaseTexto = ({ img, texto }: Props) => {
  return (
    <p className="base__texto">
      <img src={img} alt="" loading="lazy" className="base__img" /> {texto}
    </p>
  );
};

const Base = () => {
  return (
    <div className="base">
      <h1 className="base__titulo">
        Seguro de <br /> <span className="base__titulo--negrita">Salud</span>
      </h1>

      <BaseTexto img={imgShield} texto="Cómpralo de manera fácil y rápida" />

      <BaseTexto
        img={imgMobile}
        texto="Cotiza y compra tu seguro 100% digital"
      />

      <BaseTexto
        img={imgShield}
        texto="Hasta S/. 12 millones de cobertura anual"
      />

      <BaseTexto img={imgMobile} texto="Más de 300 clínicas en todo el Perú" />

      <p className="base__final">© 2021; y Company</p>

      <img
        src={imgIlustration}
        alt=""
        loading="lazy"
        className="base__ilustracion"
      />
    </div>
  );
};

export default Base;
