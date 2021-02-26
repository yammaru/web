function RegistrarPulsacion() {

    var persona = {};
    persona.identificacion = document.getElementById("identificacion").value;
    persona.nombre = document.getElementById("nombre").value;
    var e = document.getElementById("sexo");
    persona.sexo = e.options[e.selectedIndex].value;
    persona.edad = document.getElementById("edad").value;
    persona.pulsacion = CalculoPulsacion(persona.sexo, persona.edad);


    personasRegistradas = obtenerPuls();
    personasRegistradas.push(persona);

    localStorage.setItem('pulsacion', JSON.stringify(personasRegistradas));

    console.log(persona);
    console.log(personasRegistradas);

}

function CalculoPulsacion(sexo, edad) {
    var pulsacion = 0;
    if (sexo == "M") {

        pulsacion = (210 - edad) / 10;
    } else {

        pulsacion = (220 - edad) / 10;
    }
    document.getElementById("Pulsacion").innerText = pulsacion;
    return pulsacion;
}

function obtenerPuls() {
    if (localStorage.getItem('pulsacion') != null) {
        var auxiliar = localStorage.getItem('pulsacion');
        personasRegistradas = JSON.parse(auxiliar);
    } else {
        personasRegistradas = [];
    }
    return personasRegistradas;
}

function Mostrar() {
    personasRegistradas = obtenerPuls();
    console.log(personasRegistradas);
}

function Consultar() {
    var personasRegistradas = [];
    if (localStorage.getItem('pulsacion') != null) {
        personasRegistradas = JSON.parse(localStorage.getItem('pulsacion'));
    }
    personasRegistradas.forEach(item => {
        document.getElementById("tPulsacion").innerHTML +=
            '<tr>' +
            '<td  style="dislay: none;">' + item.identificacion + '</td>' +
            '<td  style="dislay: none;">' + item.nombre + '</td>' +
            '<td  style="dislay: none;">' + item.sexo + '</td>' +
            '<td  style="dislay: none;">' + item.edad + '</td>' +
            '<td  style="dislay: none;">' + item.pulsacion + '</td>' + '</tr>';
    });
}