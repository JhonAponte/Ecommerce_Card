var products = [
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

var container = document.getElementById("contenedor");

function CodeHtml(i){
    const product = products[i];
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
    
        return portionHtml;
    }
    
    //TODO: Mostrar siempre 5 estrellas
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


function RegistrarDatos(){
    const data = ObtenerDatosFormulario();
    products.push(data); //Lo añado al arreglo de objetos que tengo en el script.
    //console.log(products);
      ActualizarHtml();
      LimpiarDatos();
      //console.log("Productos tiene este nuevo valor:",products);
}

//Con el querySelectorAll obtengo todos los inputs en un arreglo con los atributos integrados. [input#photo.controls, input#clothes.controls, input#description.controls, input#stars.controls, input#discount.controls, input#price.controls]
//Al iterar lo convierto en un objeto name = value. {photo: 'image/corbata.png', clothes: 'Corbata', description: 'sssss', stars: '4'} e irá creciendo.
function ObtenerDatosFormulario(){
    const inputs = document.querySelectorAll("#Formulario input");
    //console.log(inputs);
    const FormData = {}; //Esto es un objeto.
    for(const input of inputs){
        //console.log(`input "${input.name}" y valor "${input.value}"`);
        FormData[input.name] = input.value;
        //console.log(FormData);
    }
    return FormData; //Envío un objeto con los atributos name=value
}

function LimpiarDatos(){
    const inputs = document.querySelectorAll("#Formulario input");
    for(let input of inputs){
        input.value = "";
    }
}

function ActualizarHtml(){
    var code = "";
    for(let index in products){
        code += CodeHtml(index);
    }
    container.innerHTML = code;
}

// Estas son maneras de manejar los Eventos:

// function clickBoton() {
//     console.log("Esto es un click");
// }


// 1era manera
// // const eventoBlock = document.getElementById("botones");

// 2da manera
// // // eventoBlock.onclick = clickBoton;

// 3era manera
// // // eventoBlock.onclick = function(evento){
// // //   console.log("Esto es una prueba de click");
// // // }
    
// 4ta manera
// // // eventoBlock.addEventListener("click",clickBoton);

// 5ta manera
// // eventoBlock.addEventListener("click", function(evento){
// //     console.log("Esta es otra prueba");
// // });