import { listado } from "./html.js";
import { CodeHtml } from "./codeHtml.js"; 

var container = document.getElementById("contenedor");

export function ActualizarHtml(){
    var code = "";
    for(let index in listado){
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}