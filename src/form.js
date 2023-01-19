import { ActualizarHtml, listado} from "./codigoHTML.js"; 
import { ObtenerDatosFormulario} from "./getForm.js"; 
import { LimpiarDatos} from "./deleteForm.js"; 

export function RegistrarDatos(){
    const data = ObtenerDatosFormulario();
    listado.push(data);
    ActualizarHtml();
    LimpiarDatos();
}
