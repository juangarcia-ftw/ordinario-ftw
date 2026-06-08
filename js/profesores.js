/**
 * Recupera profesores desde XML
 * y filtra por género.
 */

let listaProfesores = [];

fetch("xml/profesores.xml")

.then(respuesta => respuesta.text())

.then(datos => {

    let parser = new DOMParser();

    let xml =
    parser.parseFromString(datos, "text/xml");

    let profesoresXML =
    xml.getElementsByTagName("profesor");

    /*
    Convertir colección XML a arreglo
    */

    listaProfesores =
    Array.from(profesoresXML);

    document.getElementById("filtros")
    .innerHTML =

    `
    <button id="todos">Todos</button>
    <button id="hombres">Hombres</button>
    <button id="mujeres">Mujeres</button>
    `;

    document
    .getElementById("todos")
    .addEventListener("click", mostrarTodos);

    document
    .getElementById("hombres")
    .addEventListener("click", mostrarHombres);

    document
    .getElementById("mujeres")
    .addEventListener("click", mostrarMujeres);

    mostrarTodos();
});

/**
 * Mostrar todos
 */

function mostrarTodos(){

    let salida = "<ul>";

    listaProfesores.forEach(profesor => {

        let nombre =
        profesor
        .getElementsByTagName("nombre")[0]
        .textContent
        .trim();

        let materia =
        profesor
        .getElementsByTagName("materia")[0]
        .textContent
        .trim();

        let genero =
        profesor
        .getElementsByTagName("genero")[0]
        .textContent
        .trim();

        salida +=
        `<li>${nombre} - ${materia} - ${genero}</li>`;
    });

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

/**
 * Filtrar hombres
 */

function mostrarHombres(){

    let salida = "<ul>";

    listaProfesores.forEach(profesor => {

        let genero =
        profesor
        .getElementsByTagName("genero")[0]
        .textContent
        .trim();

        if(genero === "Hombre"){

            let nombre =
            profesor
            .getElementsByTagName("nombre")[0]
            .textContent
            .trim();

            let materia =
            profesor
            .getElementsByTagName("materia")[0]
            .textContent
            .trim();

            salida +=
            `<li>${nombre} - ${materia}</li>`;
        }
    });

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}

/**
 * Filtrar mujeres
 */

function mostrarMujeres(){

    let salida = "<ul>";

    listaProfesores.forEach(profesor => {

        let genero =
        profesor
        .getElementsByTagName("genero")[0]
        .textContent
        .trim();

        if(genero === "Mujer"){

            let nombre =
            profesor
            .getElementsByTagName("nombre")[0]
            .textContent
            .trim();

            let materia =
            profesor
            .getElementsByTagName("materia")[0]
            .textContent
            .trim();

            salida +=
            `<li>${nombre} - ${materia}</li>`;
        }
    });

    salida += "</ul>";

    document.getElementById("contenido")
    .innerHTML = salida;
}