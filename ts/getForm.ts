import { tipo } from "./codigoHTML";

var id_photo:number;
var txt_photo:string;
var name_photo:string;

export type FormDataType = {
    photo: string, 
    description: string, 
    stars: number, 
    price: string, 
    discount: string,
    clothes: string
}

export function ObtenerDatosFormulario():FormDataType{
    // const inputs = document.querySelectorAll("#Formulario input") as unknown as HTMLInputElement;

    const description = document.getElementById("description") as HTMLInputElement;
    const stars = document.getElementById("stars") as HTMLInputElement;
    const discount = document.getElementById("discount") as HTMLInputElement;
    const price = document.getElementById("price") as HTMLInputElement;
    const select = document.querySelector('#imagen') as HTMLSelectElement;

    select.selectedIndex;

    if (select) {
        id_photo = select.selectedIndex;
        txt_photo = select.options[select.selectedIndex].text;
        name_photo = select.name;
    }

    const FormData: FormDataType = {
        photo: "", 
        description: "", 
        stars:  0,
        price: "", 
        discount: "",
        clothes: "",
    };

    FormData.photo = txt_photo; 
    FormData.description= description.value;
    FormData.stars = stars.valueAsNumber;
    FormData.price= price.value;
    FormData.discount= discount.value;
    FormData.clothes=tipo[id_photo-1];

    return FormData;
}