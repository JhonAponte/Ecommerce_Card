import { tipo } from "./codigoHTML";

export function ObtenerDatosFormulario(){
    const inputs = document.querySelectorAll("#Formulario input");
    const FormData = {};

    const selector = document.querySelector('#imagen');

    const id_photo = selector.selectedIndex;
    const txt_photo = selector.options;
    const name_photo = selector.name;

    FormData[name_photo] = txt_photo[id_photo].text;

    for(const input of inputs){
        FormData[input.name] = input.value;
    }

    FormData.clothes=tipo[id_photo-1];
    
    return FormData;
}