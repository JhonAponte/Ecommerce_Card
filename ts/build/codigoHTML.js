import { Qualifier } from "./stars";
import { Product } from "./classes/Product";
import { recibirCategorias, recibirProductos } from "./getData";
export var tipo;
export var listado = [];
export var categoria = { categoria: [] };
var item;
var container = document.getElementById("contenedor");
export function ActualizarHtml() {
    var code = "";
    var index;
    for (index in listado) {
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}
export function CodeHtml(i) {
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
export async function cargaInicialHTML() {
    try {
        const todo = await Promise.all([recibirCategorias(), recibirProductos()]);
        categoria = todo[0];
        listado = todo[1];
        tipo = categoria.categoria;
        for (let i = 0; i < 8; i++) {
            listado[i].clothes = tipo[i];
        }
        ActualizarHtml();
    }
    catch (err) {
        alert(err);
    }
}
