export function LimpiarDatos(){
    let inputs = document.querySelectorAll<HTMLInputElement>("#Formulario input") ;
    for (let i = 0; i < inputs.length; i++) { 
        inputs[i].value = "";
    }
}

