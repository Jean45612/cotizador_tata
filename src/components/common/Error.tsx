import { FieldErrors } from "react-hook-form";

export default function Error({ error }: FieldErrors) {
  let listErrors: Array<string> = [];
  Object.keys(error).forEach((key) => {
    if (error[key].ref.placeholder) {
      /*El if es por si es que queremos mostrar un texto de alerta */
      let text;

      switch (error[key].type) {
        case "required":
          listErrors.push(
            `El campo ${error[key].ref.placeholder} es requerido.`
          );
          break;
        case "number":
          listErrors.push(
            `El campo ${error[key].ref.placeholder} solo permite numeros.`
          );
          break;
        case "length":
          text = error[key].message
            ? ` solo permite ${error[key].message} caracteres.`
            : " no tiene una cantidad de caracteres correcta.";

          listErrors.push(`El campo ${error[key].ref.placeholder + text}`);
          break;
        case "minLength":
          text = error[key].message
            ? ` debe tener ${error[key].message} caracteres como mínimo.`
            : " debe tener más caracteres.";
          listErrors.push(`El campo ${error[key].ref.placeholder + text}`);
          break;

        case "maxLength":
          text = error[key].message
            ? ` puede tener ${error[key].message} caracteres como máximo.`
            : " debe tener menos caracteres.";
          listErrors.push(`El campo ${error[key].ref.placeholder + text} `);
          break;
        default:
          break;
      }
    }
  });

  return (
    <div className={listErrors.length ? "alert alert-danger mb-0 mt-4" : ""}>
      {listErrors.map((e, index) => (
        <p className="alert__text" key={index}>
          {e}
        </p>
      ))}
    </div>
  );
}
