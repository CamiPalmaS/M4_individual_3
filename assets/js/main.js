//para importar clases
import { Proveedor, Articulo, TipoProveedor } from "./clases.js";

//datos inventados para probar funcionamiento codigo
const verduras = new Articulo("Paltas", 50000);
const verduleria = new Proveedor("Verduleria Maria", verduras, "mariaverduras@gmail.com", "+5699999");

console.log(verduleria.getInfoProveedor());
console.log(verduras.mostrarInfoArticulo());
console.log(verduleria.mostrarInfoProveedor());
//termina aqui

//arreglo para enviar info proveedores
const listaProveedores = [];

//funcion para registrar proveedor y articulo
document.getElementById('formProveedor').addEventListener('submit', (event) => {
    event.preventDefault();
    //recoger los input del formulario
    const nombreProveedor = document.getElementById("nombreProveedor").value.trim();
    const nombreArticulo = document.getElementById("nombreArticulo").value.trim();
    const emailArticulo = document.getElementById("emailArticulo").value.trim();
    const telefonoArticulo = document.getElementById("telefonoArticulo").value.trim();
    const precio = parseInt(document.getElementById("precio").value);
    const pais = document.getElementById("pais").value.trim();
    const internacional = document.getElementById("internacional").checked;

    //para validad textos y numeros
    const textPattern = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const numberPattern = /^[0-9.]+[-]?[0-9kK]{1}$/; 
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const telPattern = /^\+?[0-9]+$/;

    //validaciones formulario
    if (!textPattern.test(nombreProveedor) || !textPattern.test(nombreArticulo) || !textPattern.test(pais)){
        document.getElementById("errorFormulario").textContent = "Estos campos solo aceptan texto";
        return;
    }
    if (!emailPattern.test(emailArticulo)){
        document.getElementById("errorFormulario").textContent = "Por favor, ingresa un correo con formato válido";
        return;
    }
    if (!telPattern.test(telefonoArticulo) || telefonoArticulo.length < 8){
        document.getElementById("errorFormulario").textContent = "Por favor, ingrese un formato de telefono válido"
        return;
    }
    if (!numberPattern.test(precio) || precio < 0){
        document.getElementById("errorFormulario").textContent = "Por favor, ingresa un monto válido";
        return;
    }
    //crear los objetos articulo y proveedor 
    const nuevoArticulo = new Articulo(nombreArticulo, precio);
    const nuevoProveedor = new TipoProveedor(nombreProveedor, nuevoArticulo, emailArticulo, telefonoArticulo, pais, internacional);

    listaProveedores.push(nuevoProveedor);
    console.log(nuevoProveedor.getInfoProveedor());
    console.log(nuevoArticulo.mostrarInfoArticulo());
    console.log(nuevoProveedor.mostrarInfoProveedor());
    console.log(listaProveedores)

    //alerta para mostrar calculo de impuesto
    alert("El IVA (19%) del articulo es: " + calculoImpuesto(nuevoArticulo));
    //llamada funcion para mostrar tabla con info
    insertarTabla(nuevoProveedor);
    //limpiar formulario
    resetFormulario();   
});

//para limpiar los campos del formulario
function resetFormulario(){
    document.getElementById("errorFormulario").textContent = "";
    document.getElementById("formProveedor").reset();
}

//funcion para calcular el impuesto, se pasa el articulo porque precio es un atributo de este (no proveedor como dice el pdf)
const calculoImpuesto = (articulo) => 0.19 * articulo.getPrecio(); //se escribe como funcion flecha

function insertarTabla(proveedor){
    //recuperar direccion donde ira tabla
    const seccionTabla = document.getElementById("tablaProveedores");

    // Verificar si la tabla ya existe, de lo contrario crear una nueva
    let existe = document.querySelector("#tablaProveedores table");

    if (!existe){
    const miTabla = document.createElement("table");
    miTabla.classList.add("table");

    miTabla.innerHTML = `
    <thead>    
        <tr>
            <th>Nombre del Proveedor</th>
            <th>Nombre del Artículo</th>
            <th>Email</th>
            <th>Teléfono</th>
            <th>Precio</th>
            <th>País</th>
            <th>Tipo de Proveedor</th>
        </tr>
    </thead>
    <tbody id="cuerpoTabla"></tbody>
    `;
    //insertar cabecera tabla
    seccionTabla.appendChild(miTabla)
    }
    

    const listado = document.getElementById("cuerpoTabla");
    listado.innerHTML = "";

    listaProveedores.forEach(function(proveedor) {
        const filas = document.createElement("tr");
        filas.innerHTML = `
        <td>${proveedor.getNombre()}</td>
        <td>${proveedor.getArticulo().getName()}</td>
        <td>${proveedor.getEmail()}</td>
        <td>${proveedor.getTelefono()}</td>
        <td>${proveedor.getArticulo().getPrecio()}</td>
        <td>${proveedor.getPais()}</td>
        <td>${proveedor.getEsInternacional() ? "Internacional" : "Nacional"}</td>
        `;
    //insertar filas
    listado.appendChild(filas)
    });   
}