import { ActualizarHtml, listado} from "./codigoHTML"; 
import { ObtenerDatosFormulario} from "./getForm"; 
import { LimpiarDatos} from "./deleteForm"; 

export function RegistrarDatos(){
    var data = ObtenerDatosFormulario();
    listado.push(data);
    ActualizarHtml();
    LimpiarDatos();
}