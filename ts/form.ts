import { ActualizarHtml, listado} from "./codigoHTML"; 
import { ObtenerDatosFormulario, FormDataType} from "./getForm"; 
import { LimpiarDatos} from "./deleteForm"; 

export function RegistrarDatos(){
    var data: FormDataType;
    data = ObtenerDatosFormulario();
    listado.push(data);
    ActualizarHtml();
    LimpiarDatos();
}