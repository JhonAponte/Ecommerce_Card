var item;
var id_photo;
var txt_photo;
var name_photo;
var tipo;
var listado;
var categoria = {};
var container = document.getElementById("contenedor");
const selector = document.getElementById("imagen");
const eventoBlock = document.getElementById("botones");
class Product {
    constructor(photo, clothes, description, stars, price, discount) {
        this.photo = photo;
        this.clothes = clothes;
        this.description = description;
        this.stars = stars;
        this.price = price;
        this.discount = discount;
    }
}
function CodeHtml(i) {
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
function ActualizarHtml() {
    var code = "";
    var index;
    for (index in listado) {
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}
function LimpiarDatos() {
    let inputs = document.querySelectorAll("#Formulario input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
function RegistrarDatos() {
    var data = {};
    data = ObtenerDatosFormulario();
    listado.push(data);
    ActualizarHtml();
    LimpiarDatos();
}
function ObtenerDatosFormulario() {
    const inputs = document.querySelectorAll("#Formulario input");
    const FormData = {
        photo: "string",
        description: "string",
        stars: "number",
        price: "string",
        discount: "string",
        clothes: "string"
    };
    const id = document.querySelector("#imagen");
    const txt = document.querySelector('#imagen');
    const name = document.querySelector('#imagen');
    if (id != null) {
        id_photo = id.selectedIndex;
    }
    if (txt != null) {
        txt_photo = txt.options;
    }
    if (name != null) {
        name_photo = name.name;
    }
    FormData[name_photo] = txt_photo[id_photo].text;
    for (var input of inputs) {
        FormData[input.name] = input.value;
    }
    FormData.clothes = tipo[id_photo - 1];
    return FormData;
}
async function cargaInicialHTML() {
    try {
        const todo = await Promise.all([recibirCategorias(), recibirProductos()]);
        categoria = todo[0];
        listado = todo[1];
        for (const parametro in categoria) {
            tipo = categoria[parametro];
        }
        for (let i = 0; i < 8; i++) {
            listado[i].clothes = tipo[i];
        }
        ActualizarHtml();
    }
    catch (err) {
        alert(err);
    }
}
eventoBlock?.addEventListener("click", () => {
    if (selector != null) {
        RegistrarDatos();
        selector.selectedIndex = 0;
    }
});
function Qualifier(stars) {
    var qualification = "";
    for (let i = 1; i <= stars; i++) {
        qualification += "<i class='bi bi-star-fill'></i>";
    }
    if (stars < 5) {
        for (let j = 1; j <= 5 - stars; j++) {
            qualification += "<i class='bi bi-star-fill grey'></i>";
        }
    }
    return qualification;
}
async function recibirCategorias() {
    try {
        const categorias_obtenidas = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/categorias.json");
        const categorias = await categorias_obtenidas.json();
        return categorias;
    }
    catch (err) {
        alert(err);
    }
}
async function recibirProductos() {
    try {
        const productos_obtenidos = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/productos.json");
        const productos = await productos_obtenidos.json();
        return productos;
    }
    catch (err) {
        alert(err);
    }
}
document.addEventListener("DOMContentLoaded", cargaInicialHTML);
