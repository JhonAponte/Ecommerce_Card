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

var listado = [
    { 
        photo:'image/franela.jpg', 
        clothes:"Franela", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:3, 
        price:"3.200 Bs", 
        discount: "3.550 Bs"
    },
    { 
        photo:'image/converse.jpg', 
        clothes:"Converse", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:5, 
        price:"8.000 Bs", 
        discount: "7.000 Bs" 
    },
    { 
        photo:'image/gorra.jpg', 
        clothes:"Gorra", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:2, 
        price:"3.000 Bs", 
        discount: "4.000 Bs" 
    },
    { 
        photo:'image/medias.png', 
        clothes:"Medias", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:1, 
        price:"1.280 Bs", 
        discount: "1.600 Bs" 
    },
    { 
        photo:'image/chaleco.png', 
        clothes:"Chaleco", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:4, 
        price:"800 Bs", 
        discount: "1.000 Bs"
    },
    { 
        photo:'image/botas.jpg', 
        clothes:"Botas", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:3, 
        price:"2.800 Bs", 
        discount: "3.200 Bs"
    },
    { 
        photo:'image/camisa.jpg', 
        clothes:"Camisa", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:5, 
        price:"2450 Bs", 
        discount: "3100 Bs" 
    },
    { 
        photo:'image/corbata.png', 
        clothes:"Corbata", 
        description:"Lorem ipsum dolor sit amet.", 
        stars:4, 
        price:"800 Bs", 
        discount: "950 Bs" 
    }
];

var item;

var container = document.getElementById("contenedor");

const eventoBlock = document.getElementById("botones");

eventoBlock.addEventListener("click", RegistrarDatos);

function RegistrarDatos(){
    const data = ObtenerDatosFormulario();
    listado.push(data);
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

function ActualizarHtml(){
    var code = "";
    for(let index in listado){
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}

function CodeHtml(i){
    item = new Product(listado[i].photo, listado[i].clothes, listado[i].description, listado[i].stars, listado[i].price, listado[i].discount);
    var portionHtml = `
        <div class="container">
            <img src= "${item.photo}" class="card-img">
            <p class="name">${item.clothes}</p>
            <p class="description">${item.description}</p>
            <div class="star">${Qualifier(item.stars)}</div>
            <br>
            <h5>${item.price} &emsp;<strike>${item.discount}</strike></h5>
            <br>
            <button class="btn">Comprar</button>
        </div>`;
    
        return portionHtml;
    }

function LimpiarDatos(){
    const inputs = document.querySelectorAll("#Formulario input");
    for(let input of inputs){
        input.value = "";
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