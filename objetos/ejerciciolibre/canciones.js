import { Cantante } from './cantante.js';

$(document).ready(function () {

	let cantantesArray = [];

	let cantantesJSON = '{ "cantante":[{"nombre":"Lil Mosey", "edad":"17", "cancion":"Noticed"}, {"nombre":"Juice WRLD", "edad":"21", "cancion":"Lucid Dreams"},{"nombre":"Iann Dior", "edad":"20", "cancion":"Emotions"}]}';

	let cantantes = JSON.parse(cantantesJSON);

	for (let i = 0; i<3; i++){
		cantantesArray = [i] = new Cantante(cantantes.cantante[i].nombre, cantantes.cantante[i].edad, cantantes.cantante[i].cancion);
	}

	let element = document.getElementById("tabla");
	let tabla = "<table border 1>";
	tabla += "<tr>";
    tabla += "<th>Nombre</th>"
    tabla += "<th>Edaad</th>";
    tabla += "<th>Cancion Mas Popular</th>";
    tabla += "</tr>";

    for (let i = 0; i< cantantesArray.length; i++){
    	tabla += "<tr>";
    	tabla += "<td>" + cantantesArray[i].getNombre() + "</td>";
        tabla += "<td>" + cantantesArray[i].getEdad() + "</td>";
        tabla += "<td>" + cantantesArray[i].getCancion() + "</td>";
    }

    tabla += "</table>"
    element.innerHTML = tabla;
}

