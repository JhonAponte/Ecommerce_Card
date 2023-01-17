import { ActualizarHtml, tipo, listado } from "./html.js";

export function RegistrarDatos(){
    const data = ObtenerDatosFormulario();
    listado.push(data);
    ActualizarHtml();
    LimpiarDatos();
}

export function LimpiarDatos(){
        const inputs = document.querySelectorAll("#Formulario input");
        for(let input of inputs){
            input.value = "";
        }
}

export function ObtenerDatosFormulario(){
    const inputs = document.querySelectorAll("#Formulario input");
    const FormData = {};

    const id_photo = document.querySelector('#imagen').selectedIndex;
    const txt_photo = document.querySelector('#imagen').options;
    const name_photo = document.querySelector('#imagen').name;

    FormData[name_photo] = txt_photo[id_photo].text;

    for(const input of inputs){
        FormData[input.name] = input.value;
    }

    FormData.clothes=tipo[id_photo-1];
    return FormData;
}
