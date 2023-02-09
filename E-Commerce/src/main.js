import { cargaInicialHTML } from "./codigoHTML";
import { RegistrarDatos } from "./form";

var selector_1 = document.getElementById("imagen");
const eventoBlock = document.getElementById("botones");

eventoBlock.addEventListener("click", () => {
    RegistrarDatos();
    selector_1.selectedIndex = 0;
});

document.addEventListener("DOMContentLoaded", cargaInicialHTML);
