export class Proveedor {
    #nombre;
    #articulo;
    #email;
    #telefono;

    constructor (nombre, articulo, email, telefono){
        this.#nombre = nombre;
        this.#articulo = articulo;
        this.#email = email;
        this.#telefono = telefono;
    }

    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre = nombre
    }

    getArticulo(){
        return this.#articulo;
    }
    setArticulo(articulo){
        this.#articulo = articulo
    }

    getEmail(){
        return this.#email;
    }
    setEmail(email){
        this.#email = email;
    }

    getTelefono(){
        return this.#telefono;
    }
    setTelefono(telefono){
        this.#telefono = telefono;
    }

    getInfoProveedor(){
        return `Nombre: ${this.#nombre}, Teléfono: ${this.getTelefono()}`;
    }

    mostrarInfoProveedor() {
        return `Nombre: ${this.#nombre}, Teléfono: ${this.#telefono}, Email: ${this.#email}, Especificación del Articulo: ${this.#articulo.mostrarInfoArticulo()}`;
    }
}

//Clase articulo
export class Articulo {
    #name;
    #precio;

    constructor(name, precio){
        this.#name = name;
        this.#precio = precio;
    }

    getName(){
        return this.#name;
    }
    setName(name){
        this.#name = name;
    }

    getPrecio(){
        return this.#precio;
    }
    setPrecio(precio){
        this.#precio = precio
    }

    mostrarInfoArticulo() {
        return `Nombre: ${this.#name}, Precio: ${this.#precio}`;
    }
}
