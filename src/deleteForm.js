export function LimpiarDatos(){
    const inputs = document.querySelectorAll("#Formulario input");
    for(let input of inputs){
        input.value = "";
    }
}