/**
 * Recupera información de contacto
 * desde XML y la muestra en pantalla.
 */

fetch("xml/contacto.xml")

.then(respuesta => respuesta.text())

.then(datos => {

    let parser = new DOMParser();

    let xml =
    parser.parseFromString(datos, "text/xml");

    let telefono =
    xml.getElementsByTagName("telefono")[0]
    .textContent;

    let correo =
    xml.getElementsByTagName("correo")[0]
    .textContent;

    let direccion =
    xml.getElementsByTagName("direccion")[0]
    .textContent;

    let salida =

    "<p><strong>Teléfono:</strong> " +
    telefono +
    "</p>" +

    "<p><strong>Correo:</strong> " +
    correo +
    "</p>" +

    "<p><strong>Dirección:</strong> " +
    direccion +
    "</p>" +

    '<img src="logouv.jpg" ' +

    'alt="Mapa de ubicación de la universidad">';

    document.getElementById("contenido")
    .innerHTML = salida;
});