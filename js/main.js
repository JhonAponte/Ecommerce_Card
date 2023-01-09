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

var product;

var container = document.getElementById("contenedor");

const eventoBlock = document.getElementById("botones");

eventoBlock.addEventListener("click", RegistrarDatos);


function RegistrarDatos(){
    const data = ObtenerDatosFormulario();
    product = new Product(data.photo, data.clothes, data.description, data.stars, data.price, data.discount);
    ActualizarHtml();
    LimpiarDatos();

}

function ObtenerDatosFormulario(){
    const inputs = document.querySelectorAll("#Formulario input");

    const FormData = {}; 
    for(const input of inputs){

        FormData[input.name] = input.value;
    }

    return FormData; 
}

function LimpiarDatos(){
    const inputs = document.querySelectorAll("#Formulario input");
    for(let input of inputs){
        input.value = "";
    }
}

function ActualizarHtml(){
    var portionHtml = `
        <div class="container">
            <img src= "${product.photo}" class="card-img">
            <p class="name">${product.clothes}</p>
            <p class="description">${product.description}</p>
            <div class="star">${Qualifier(product.stars)}</div>
            <br>
            <h5>${product.price} &emsp;<strike>${product.discount}</strike></h5>
            <br>
            <button class="btn">Comprar</button>
        </div>`;

        const node = document.createElement("p");
        node.innerHTML = portionHtml;
        container.appendChild(node);
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