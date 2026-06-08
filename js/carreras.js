/**
 * Recupera carreras desde XML
 * y permite filtrarlas.
 */

fetch("xml/carreras.xml")

.then(r => r.text())

.then(datos => {

    let parser = new DOMParser();

    let xml =
    parser.parseFromString(datos, "text/xml");

    let carreras =
    xml.getElementsByTagName("carrera");

    window.listaCarreras = carreras;

    document.getElementById("filtros")
    .innerHTML =

    '<button onclick="mostrarTodas()">Todas</button>' + '<button onclick="filtrarIngenieria()">Ingenierías</button>'+
    '<button onclick="filtrarGeografia()">Geografía</button>' + '<button onclick="filtrarEconomia()">Economía</button>';

    mostrarTodas();
});

function mostrarTodas(){

    let salida = "<ul>";

    for(let i=0; i<listaCarreras.length; i++){

        let nombre =
        listaCarreras[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        salida += "<li>" + nombre + "</li>";
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

function filtrarIngenieria(){

    let salida = "<ul>";

    for(let i=0; i<listaCarreras.length; i++){

        let nombre =
        listaCarreras[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        if(nombre.includes("Ingeniería")){

            salida += "<li>" + nombre + "</li>";
        }
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

function filtrarGeografia(){

    let salida = "<ul>";

    for(let i=0; i<listaCarreras.length; i++){

        let nombre =
        listaCarreras[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        if(nombre.includes("Geografía")){

            salida += "<li>" + nombre + "</li>";
        }
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

function filtrarEconomia(){

    let salida = "<ul>";

    for(let i=0; i<listaCarreras.length; i++){

        let nombre =
        listaCarreras[i]
        .getElementsByTagName("nombre")[0]
        .textContent;

        if(nombre.includes("Economía")){

            salida += "<li>" + nombre + "</li>";
        }
    }

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}