import { Qualifier } from "./stars";
import { Product } from "./classes/Product";
import { recibirCategorias, recibirProductos} from "./getData.js"; 

export var tipo;
export var listado;

var item;
var categoria;

var container = document.getElementById("contenedor");

export function ActualizarHtml(){
    var code = "";
    for(let index in listado){
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}

export async function cargaInicialHTML(){
    try {
        let [categoria, _listado] = await Promise.all([recibirCategorias(),recibirProductos()]);
        // const todo = await Promise.all([recibirCategorias(),recibirProductos()]);
        // categoria = todo[0];
        // listado = todo[1];
        for (const parametro in categoria) {
            tipo = categoria[parametro];
        }
        for (let i = 0; i < _listado.length; i++) {
            _listado[i].clothes = tipo[i];
        }
        listado = _listado;
        ActualizarHtml();
    } catch(err) {
        alert(err);
    }
}

function CodeHtml(i){
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
            <button type="button" class="btn btn-outline-primary">Primary</button>
            <button class="btn">Comprar</button>
        </div>`;
    
        return portionHtml;
}