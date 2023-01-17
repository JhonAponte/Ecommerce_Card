(function () {
    'use strict';

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

    var item;

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
            <button class="btn">Comprar</button>
        </div>`;
        
            return portionHtml;
    }

    var container = document.getElementById("contenedor");

    function ActualizarHtml(){
        var code = "";
        for(let index in listado){
            code += CodeHtml(index);
        }
        container.innerHTML = code;
    }

    var tipo;
    var listado;
    var categoria;

    async function cargaInicialHTML(){
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

    function ObtenerDatosFormulario(){
        const inputs = document.querySelectorAll("#Formulario input");
        const FormData = {};

        const id_photo = document.querySelector('#imagen').selectedIndex;
        const txt_photo = document.querySelector('#imagen').options;
        const name_photo = document.querySelector('#imagen').name;

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
