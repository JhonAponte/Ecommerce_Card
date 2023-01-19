import { tipo } from "./codigoHTML";
var id_photo;
var txt_photo;
var name_photo;
export function ObtenerDatosFormulario() {
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
        name_photo = select.name;
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
