import { cargaInicialHTML } from "./html.js";
import { RegistrarDatos } from "./form.js";

var selector_1 = document.getElementById("imagen");
const eventoBlock = document.getElementById("botones");

eventoBlock.addEventListener("click", () => {
    RegistrarDatos();
    selector_1.selectedIndex = 0;
});

document.addEventListener("DOMContentLoaded", cargaInicialHTML);

