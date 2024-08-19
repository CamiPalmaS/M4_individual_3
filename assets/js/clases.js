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

//nueva clase extendida TipoProveedor
export class TipoProveedor extends Proveedor {
    #pais;
    #esInternacional;

    constructor(nombre, articulo, email, telefono, pais, esInternacional) {
        //llamamos al constructor padre con super
        super(nombre, articulo, email, telefono);
        this.#pais = pais;
        this.#esInternacional = esInternacional;
    }

    getPais() {
        return this.#pais;
    }
    setPais(pais) {
        this.#pais = pais;
    }

    getEsInternacional() {
        return this.#esInternacional;
    }
    setEsInternacional(esInternacional) {
        this.#esInternacional = esInternacional;
    }

    //se sobrescribe el método getInfoProveedor() 
    getInfoProveedor() {
        const infoBase = super.getInfoProveedor(); //llamamos al metodo original
        const tipoProveedor = this.#esInternacional ? "Internacional" : "Nacional";//habra que chequear si es true o false
        return `${infoBase}, País: ${this.#pais}, Tipo de Proveedor: ${tipoProveedor}`;
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
