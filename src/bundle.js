(function () {
    'use strict';

    function Qualifier(stars){
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

    async function recibirCategorias(){
        try {
            const categorias_obtenidas = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/categorias.json");
            const categorias = await categorias_obtenidas.json();
            return categorias;
        } catch(err) {
            alert(err);
        }
    }

    async function recibirProductos(){
        try {
            const productos_obtenidos = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/productos.json");
            const productos = await productos_obtenidos.json();
            return productos;
        } catch(err) {
            alert(err);
        }
    }

    var tipo;
    var listado;

    var item;

    var container = document.getElementById("contenedor");

    function ActualizarHtml(){
        var code = "";
        for(let index in listado){
            code += CodeHtml(index);
        }
        container.innerHTML = code;
    }

    async function cargaInicialHTML(){
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
            <div class="quantify">
                <button type="button" class="btn btn-outline-secondary">-</button>
                <input class="cart_quantify" type="text value="0"></input>
                <button type="button" class="btn btn-outline-primary">+</button>
            </div>
            <button class="btn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-check" viewBox="0 0 16 16">
            <path d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>Comprar</button>
        </div>`;
        
            return portionHtml;
    }

    function ObtenerDatosFormulario(){
        const inputs = document.querySelectorAll("#Formulario input");
        const FormData = {};

        const selector = document.querySelector('#imagen');

        const id_photo = selector.selectedIndex;
        const txt_photo = selector.options;
        const name_photo = selector.name;

        FormData[name_photo] = txt_photo[id_photo].text;

        for(const input of inputs){
            FormData[input.name] = input.value;
        }

        FormData.clothes=tipo[id_photo-1];
        
        return FormData;
    }

    function LimpiarDatos(){
        const inputs = document.querySelectorAll("#Formulario input");
        for(let input of inputs){
            input.value = "";
        }
    }

    function RegistrarDatos(){
        const data = ObtenerDatosFormulario();
        listado.push(data);
        ActualizarHtml();
        LimpiarDatos();
    }

    var selector_1 = document.getElementById("imagen");
    const eventoBlock = document.getElementById("botones");

    eventoBlock.addEventListener("click", () => {
        RegistrarDatos();
        selector_1.selectedIndex = 0;
    });

    document.addEventListener("DOMContentLoaded", cargaInicialHTML);

})();
