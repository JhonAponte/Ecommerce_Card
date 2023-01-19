export async function recibirCategorias(){
    try {
        const categorias_obtenidas = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/categorias.json");
        const categorias:RespuestaApiCategoria = await categorias_obtenidas.json();
        return categorias;
    } catch(err) {
        alert(err);
    }
}

export async function recibirProductos(){
    try {
        const productos_obtenidos = await fetch("https://raw.githubusercontent.com/JhonAponte/Ecommerce_Card/json/productos.json");
        const productos: RespuestaApiProductos = await productos_obtenidos.json();
        return productos;
    } catch(err) {
        alert(err);
    }
}

export type RespuestaApiCategoria = {
    categoria: string[],
}

export type Producto = { 
    photo: string, 
    description: string, 
    stars: number, 
    price: string, 
    discount: string,
    clothes: string
}

export type RespuestaApiProductos = Producto[]