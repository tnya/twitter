/* PARA ELIMINAR LLAMADA DEL onclick="agregar()" del elemento #boton

window.onload = function(){
		document.getElementById("boton").addEventListener("click", agregar);
}

*/
function agregar(){
//Texto ingresado en textarea y limpiar textarea
	var tareas = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";

//Indicar donde van a estar las tareas que recupere de textarea
	var cont = document.getElementById("contenedor");

//Creamos nuestros nuevos nodos elementos
	var nuevasTareas = document.createElement("div");
	var textoNuevaTarea = document.createTextNode(tareas);
	var elementoContenedor = document.createElement("span");

//Asignamos padres a nodos creados
	elementoContenedor.appendChild(textoNuevaTarea);
	nuevasTareas.appendChild(elementoContenedor);
	cont.appendChild(nuevasTareas);

//Creamos checkbox e iconos. Damos atributos y clases
	var chck = document.createElement("input");
	chck.type = "checkbox";
	chck.setAttribute("class", "check");
	var basura = document.createElement("span");
	basura.classList.add("fa", "fa-trash-o");
	var cora = document.createElement("span");
	cora.classList.add("fa", "fa-heart");

//Asignar padre a nodos creados
	nuevasTareas.appendChild(chck);
	nuevasTareas.appendChild(basura);
	nuevasTareas.appendChild(cora);

//Agregamos un evento al hacer clic, elimine o agregue la clase "tachado" al elementoContenedor
	chck.addEventListener("click", function(){
		elemento.Contenedor.classList.toggle("tachado");
	})

//Removemos el icono basurero al hacerle click sobre el
	basura.addEventListener("click", function(){
		cont.removeChild(nuevasTareas);
	})
	
}







