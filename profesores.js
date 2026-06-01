fetch("profesores.xml")
    .then(respuesta => respuesta.text())
    .then(datos => {

        let parser = new DOMParser();
        let xml = parser.parseFromString(datos, "text/xml");

        let profesores = xml.getElementsByTagName("profesor");

        let salida = "<ul>";

        for (let i = 0; i < profesores.length; i++) {

            let nombre = profesores[i]
                .getElementsByTagName("nombre")[0]
                .textContent;

            let materia = profesores[i]
                .getElementsByTagName("materia")[0]
                .textContent;

            salida += "<li>" + nombre + " - " + materia + "</li>";
        }

        salida += "</ul>";

        document.getElementById("contenido").innerHTML = salida;
    });