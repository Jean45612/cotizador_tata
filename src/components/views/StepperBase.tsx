import React from "react";
import FormInicio from "../layout/base/FormInicio";
import StepFinal from "../layout/base/StepFinal";
import Paso1 from "../layout/base/Paso1";
import Paso2 from "../layout/base/Paso2";
import Persona from "../../utils/interfaces/persona";

const tempPersona: Persona = {
  tipoDocumento: "1",
  numeroDocumento: "",
  fechaNacimiento: "",
  nombre: "",
  apePaterno: "",
  apeMaterno: "",
  genero: "",
  seguro: "",
  celular: "",
  terminos: false,
  comunicaciones: false,
  plan: "1",
};

export default function StepperBase() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = ["Inicio", "Paso 1", "Paso 2"];

  const [persona, setPersona] = React.useState<Persona>(tempPersona);

  const updatePersona = (form: Persona) => {
    setPersona((prevPersona) => ({ ...prevPersona, ...form }));
  };

  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return (
          <FormInicio
            handleNext={handleNext}
            updatePersona={updatePersona}
            dataPersona={persona}
          />
        );
      case 1:
        return (
          <Paso1
            handleNext={handleNext}
            handleBack={handleBack}
            updatePersona={updatePersona}
            dataPersona={persona}
          />
        );
      case 2:
        return (
          <Paso2
            handleNext={handleNext}
            handleBack={handleBack}
            updatePersona={updatePersona}
            dataPersona={persona}
          />
        );
      default:
        return "Unknown step";
    }
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <>
      {activeStep === steps.length ? (
        <StepFinal />
      ) : (
        <>{getStepContent(activeStep)}</>
      )}
    </>
  );
}
