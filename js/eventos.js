/**
 * Recupera eventos desde XML
 * y los muestra en pantalla.
 */

fetch("xml/eventos.xml")

.then(respuesta => respuesta.text())

.then(datos => {

    let parser = new DOMParser();

    let xml =
    parser.parseFromString(datos, "text/xml");

    let eventos =
    xml.getElementsByTagName("evento");

    let salida = "<ul>";

    for(let i = 0; i < eventos.length; i++){

        let nombre =
        eventos[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        let fecha =
        eventos[i]
        .getElementsByTagName("fecha")[0]
        .textContent;

        salida +=
        "<li>" +
        nombre +
        " - " +
        fecha +
        "</li>";
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
});