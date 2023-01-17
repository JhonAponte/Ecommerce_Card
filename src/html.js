import { recibirCategorias, recibirProductos} from "./getData.js"; 
import { Product } from "./class.js";

var container = document.getElementById("contenedor");

export var tipo;
export var listado;
export var categoria;
var item;

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

export function ActualizarHtml(){
        var code = "";
        for(let index in listado){
            code += CodeHtml(index);
        }
        container.innerHTML = code;
}

export function CodeHtml(i){
    item = new Product(listado[i].photo, listado[i].clothes, listado[i].description, listado[i].stars, listado[i].price, listado[i].discount);
    var portionHtml = `
        <div class="container">
            <img src= "${item.photo}" alt="${item.clothes}" class="card-img">
            <h1 class="name">${item.clothes}</h1>
            <p class="description">${item.description}</p>
            <div class="star">${Qualifier(item.stars)}</div>
            <br>
            <h5>${item.price} &emsp;<strike>${item.discount}</strike></h5>
            <br>
            <button class="btn">Comprar</button>
        </div>`;
    
        return portionHtml;
}

export function Qualifier(stars){
        var qualification = "";
        for(let i = 1; i <= stars; i++){
            qualification += "<i class='bi bi-star-fill'></i>";
        }
        if(stars <5){
            for(let j = 1; j <= 5 - stars; j++){
                qualification += "<i class='bi bi-star-fill grey'></i>";
            }
        
        }
        
        return qualification;
}