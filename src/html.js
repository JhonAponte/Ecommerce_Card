import { recibirCategorias, recibirProductos} from "./getData.js"; 
import { ActualizarHtml} from "./actualizarHtml.js"; 

export var tipo;
export var listado;
export var categoria;

export async function cargaInicialHTML(){
    try {
        // console.log("Esto es una prueba");
        // sleep(3000);
        // console.log("Esta es la segunda parte de la prueba");
        // sleep(2000);
        const todo = await Promise.all([recibirCategorias(),recibirProductos()]);
        categoria = todo[0];
        listado = todo[1];
        for (const parametro in categoria) {
            tipo = categoria[parametro];
        }
        for (let i = 0; i < 8; i++) {
            listado[i].clothes = tipo[i];
        }
        ActualizarHtml();
    } catch(err) {
        alert(err);
    }
}




