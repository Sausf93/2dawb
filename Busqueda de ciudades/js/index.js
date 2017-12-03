function cargarJson() {
	//alert(json["movilidadGM00"].ciclo)
	//controlar los toggle para que no esten activados los dos a la vez.
	//quizas no la necesito.

}

function comprueba() {

	var toggle = document.getElementById("toggle")
	var resu
	if (toggle.checked) {
		resu = 0
	} else
		resu = 1

	cargar(resu)
}

function cargar(resu) { //optimizar el for pa cuando busca por ciclos o por paises.
	var array = new Array()
	var cont = 0
	if (resu == 0) {
		//Filtrar el combobox por el primer select.
		var select = document.getElementById("select")
		var textoSelect = select.value
		var table = document.getElementById("check")
		table.innerHTML = " "
		var padrediv = document.getElementById("div")
		padrediv.innerHTML=" "
		if (textoSelect == "Todos") {
			for (var i in json) {
				cont = 0
				for (var g = 0; g <= array.length; g++) {
					if (array[g] == json[i].pais)
						cont++
				}
				if (cont == 0)
					array.push(json[i].pais.toString())
			}
			var select = generica("select", "select", padrediv)
			select.setAttribute("class", "form-control form-control-lg")
			for (var k = 0; k <= array.length - 1; k++) {
				var option = generica("option", "option", select)
				var texto = document.createTextNode(array[k])
				option.appendChild(texto)
			}
		}
		else{
			var introducir
			for (var i in json) {
				cont = 0
				introducir=false
				for (var g = 0; g <= array.length; g++) {
					if (array[g] == json[i].pais)
						cont++
					if(json[i].tipo==textoSelect)
						introducir=true
				}
				if ((cont == 0) && (introducir))
					array.push(json[i].pais.toString())
			}
			var select = generica("select", "select", padrediv)
			select.setAttribute("class", "form-control form-control-lg")
			for (var k = 0; k <= array.length - 1; k++) {
				var option = generica("option", "option", select)
				var texto = document.createTextNode(array[k])
				option.appendChild(texto)
			}
		}

	} else {
		var div = document.getElementById("div")
		div.innerHTML = " "
		var marcarTodos= generica("button", "button", div)
		marcarTodos.setAttribute("class", "btn btn-primary")
		var text1=document.createTextNode("Marcar todos")
        marcarTodos.appendChild(text1)
        marcarTodos.setAttribute("type", "button")
		marcarTodos.addEventListener("click", function () {marcar(true)}, false)
		var desmarcarTodos= generica("button", "button", div)
		desmarcarTodos.setAttribute("class", "btn btn-primary")
		var text2=document.createTextNode("Desmarcar todos")
        desmarcarTodos.appendChild(text2)
        desmarcarTodos.setAttribute("type", "button")
		desmarcarTodos.addEventListener("click", function () {marcar(false)}, false)
		var padre = document.getElementById("check")
		for (var i in json) {
			cont = 0
			for (var g = 0; g <= array.length; g++) {
				if (array[g] == json[i].pais)
					cont++
			}
			if (cont == 0)
				array.push(json[i].pais.toString())
		}
		for (var j = 0; j <= array.length - 1; j++) {
			if (j % 5 == 0)
				var tr = generica("tr", "tr", padre)
			var td = generica("td", "td", tr)
			var texto = document.createTextNode(array[j])
			td.appendChild(texto)
			var check = generica("input", "input", td)
			check.setAttribute("type", "checkbox")
		}
	}



}

function generica(nombre, tipo, padre, texto, atributo) { //funcion generica para crear los nodos.
	nombre = document.createElement(tipo)
	if (texto != null)
		nombre.innerHTML = texto
	if (atributo != null)
		nombre.setAttribute("id", atributo)
	if (padre != null)
		padre.appendChild(nombre)
	return nombre
}

function marcar(marcar){ //Mirar porque cuando acaba el evento me borra el div.
	var checks= document.getElementsByTagName("input")

	for( var i=1; i<= checks.length-1; i++){
		checks[i].checked=marcar
	}
}