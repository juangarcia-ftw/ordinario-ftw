/**
 * Recupera materias desde XML
 * y filtra usando checkbox.
 */

fetch("xml/materias.xml")

.then(r => r.text())

.then(datos => {

    let parser = new DOMParser();

    let xml =
    parser.parseFromString(datos, "text/xml");

    let materias =
    xml.getElementsByTagName("materia");

    window.listaMaterias = materias;

    document.getElementById("filtros")
    .innerHTML =

    '<label>' +

    '<input type="checkbox" id="web" onchange="filtrar()">' +

    'Solo Web</label>';

    mostrar();
});

function mostrar(){

    let salida = "<ul>";

    for(let i=0; i<listaMaterias.length; i++){

        let nombre =
        listaMaterias[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        salida += "<li>" + nombre + "</li>";
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

function filtrar(){

    let activo =
    document.getElementById("web").checked;

    let salida = "<ul>";

    for(let i=0; i<listaMaterias.length; i++){

        let nombre =
        listaMaterias[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        if(activo){

            if(nombre.includes("Web")){

                salida += "<li>" + nombre + "</li>";
            }

        }else{

            salida += "<li>" + nombre + "</li>";
        }
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}