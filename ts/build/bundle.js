(function () {
    'use strict';

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

    var tipo;
    var listado = [];
    var categoria = { categoria: [] };
    var item;
    var container = document.getElementById("contenedor");
    function ActualizarHtml() {
        var code = "";
        var index;
        for (index in listado) {
            code += CodeHtml(index);
        }
        container.innerHTML = code;
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
    async function cargaInicialHTML() {
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

    var id_photo;
    var txt_photo;
    function ObtenerDatosFormulario() {
        // const inputs = document.querySelectorAll("#Formulario input") as unknown as HTMLInputElement;
        const description = document.getElementById("description");
        const stars = document.getElementById("stars");
        const discount = document.getElementById("discount");
        const price = document.getElementById("price");
        const select = document.querySelector('#imagen');
        select.selectedIndex;
        if (select) {
            id_photo = select.selectedIndex;
            txt_photo = select.options[select.selectedIndex].text;
            select.name;
        }
        const FormData = {
            photo: "",
            description: "",
            stars: 0,
            price: "",
            discount: "",
            clothes: "",
        };
        FormData.photo = txt_photo;
        FormData.description = description.value;
        FormData.stars = stars.valueAsNumber;
        FormData.price = price.value;
        FormData.discount = discount.value;
        FormData.clothes = tipo[id_photo - 1];
        return FormData;
    }

    function LimpiarDatos() {
        let inputs = document.querySelectorAll("#Formulario input");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

    function RegistrarDatos() {
        var data;
        data = ObtenerDatosFormulario();
        listado.push(data);
        ActualizarHtml();
        LimpiarDatos();
    }

    const selector = document.getElementById("imagen");
    const eventoBlock = document.getElementById("botones");
    eventoBlock?.addEventListener("click", () => {
        if (selector != null) {
            RegistrarDatos();
            selector.selectedIndex = 0;
        }
    });
    document.addEventListener("DOMContentLoaded", cargaInicialHTML);

})();
