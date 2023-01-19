import { cargaInicialHTML } from "./codigoHTML";
import { RegistrarDatos } from "./form";

const selector = document.getElementById("imagen") as HTMLSelectElement | null;
const eventoBlock = document.getElementById("botones");

eventoBlock?.addEventListener("click", () => {
    if (selector != null) {
        RegistrarDatos();
        selector.selectedIndex = 0;
      }
});

document.addEventListener("DOMContentLoaded", cargaInicialHTML);
