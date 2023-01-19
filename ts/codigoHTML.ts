import { Qualifier } from "./stars";
import { Product } from "./classes/Product";
import { recibirCategorias, recibirProductos, RespuestaApiCategoria, RespuestaApiProductos} from "./getData"; 

export var tipo: string[];
export var listado: RespuestaApiProductos = [];
export var categoria: RespuestaApiCategoria = {categoria:[]};

var item: Product;
var container: HTMLDivElement = document.getElementById("contenedor") as HTMLDivElement;

export function ActualizarHtml(){
    var code = "";
    var index: any;
    for(index in listado){
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}

export function CodeHtml(i:number){
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

export async function cargaInicialHTML(){
    try {
        const todo = await Promise.all([recibirCategorias(),recibirProductos()]);
        categoria = todo[0] as RespuestaApiCategoria;
        listado = todo[1] as RespuestaApiProductos;

        tipo = categoria.categoria;
        
        for (let i = 0; i < 8; i++) {
            listado[i].clothes = tipo[i];
        }
        ActualizarHtml();
    } catch(err) {
        alert(err);
    }
}