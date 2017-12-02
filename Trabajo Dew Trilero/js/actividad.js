crearElementos(); //Llamada a la funcion crearElementos.
var txt = true;
var cont = localStorage.getItem("puntuacion"); //Recupera de localstorage la puntuacion.
if (cont == null)
    cont = 0;
var victoria = 0;
var aleatorio=0;
function crearElementos() {
	victoria=0;	//Crea todos los elementos del html, las imagenes de las cartas...
	aleatorio = Math.round(Math.random() * (2 - 0) + 0); //Crea numero aleatorio entre 0 y 2.
    txt = true;
    var paginaPrincipal = document.getElementsByTagName("body")[0];
    paginaPrincipal.innerHTML = " ";
    var head = document.getElementsByTagName("head")[0];
    var h1 = generica("h1", "h1", paginaPrincipal, "Trilero")
    var style = generica("style", "style", head);
    var container = generica("div", "div", paginaPrincipal, null, "container");
    var back1 = generica("back1", "img");
    back1.setAttribute("id", "back1");
    back1.setAttribute("src", "imagenes/back.png");
    container.appendChild(back1);
    var back2 = generica("back2", "img");
    back2.setAttribute("id", "back2");
    back2.setAttribute("src", "imagenes/back.png");
    container.appendChild(back2);
    var back3 = generica("back3", "img");
    back3.setAttribute("id", "back3");
    back3.setAttribute("src", "imagenes/back.png");
    container.appendChild(back3);
    cartas();
}



function cartas() { //Asigna eventos click a las imagenes de las cartas.

    var carta1 = document.getElementById("back1");
    back1.addEventListener('click', card1, false);

    var carta2 = document.getElementById("back2");
    back2.addEventListener('click', card2, false)

    var carta3 = document.getElementById("back3");
    back3.addEventListener('click', card3, false)
}

function card1() { //Funcion que se ejecuta con la primera carta.
    //borrar();
    if ((aleatorio == 0) && (victoria == 0)) {
        victoria = 1;
        back1.setAttribute("src", "imagenes/Asdeoros.png");
    }
    if ((aleatorio != 0) && (victoria == 0)) {
        back1.setAttribute("src", "imagenes/3debastos.png")
        setTimeout(function () {
            back3.setAttribute("src", "imagenes/Asdeoros.png")
        }, 500);
        victoria = 2;
    }
    repetir(victoria);
    click = true;
}

function card2() { //Funcion que se ejecuta con la segunda carta.
    //borrar();
    if ((aleatorio == 1) && (victoria == 0)) {
        victoria = 1;
        back2.setAttribute("src", "imagenes/Asdeoros.png");
    }
    if ((aleatorio != 1) && (victoria == false)) {
        back2.setAttribute("src", "imagenes/3deespadas.png")
        setTimeout(function () {
            back1.setAttribute("src", "imagenes/Asdeoros.png")
        }, 500);
        victoria = 2;
    }
    repetir(victoria);
    click = true;
}

function card3() {//Funcion que se ejecuta con la tercera carta.
    //borrar();
    if ((aleatorio == 2) && (victoria == 0)) {
        victoria = 1;
        back3.setAttribute("src", "imagenes/Asdeoros.png");
    }
    if ((aleatorio != 2) && (victoria == false)) {
        back3.setAttribute("src", "imagenes/8decopas.png")
        setTimeout(function () {
            back2.setAttribute("src", "imagenes/Asdeoros.png")
        }, 500);
        victoria = 2;
    }
    repetir(victoria);
    click = true;
}

//function borrar() { //Borra los eventos de las imagenes una vez se haya ejecutado alguna de ellas.
  //  document.getElementById("back1").removeEventListener("click", card1);
  //  document.getElementById("back2").removeEventListener("click", card2);
  //  document.getElementById("back3").removeEventListener("click", card3);
//}

function repetir(victoria) { //Funcion que comprueba si has ganado o perdido. y lo escribe en el html.
    if (victoria == 1) {
        if (txt) {
            var texto = generica("h2", "h2", container, "Has Ganado");
            var otraVez = generica("button", "button", container, "Otra vez")
            otraVez.setAttribute("onclick", "crearElementos()");
            txt = false;
            cont++;
            localStorage.setItem("puntuacion", cont);
            var puntuacion = generica("h2", "h2", container, "Has ganado " + cont + " veces", "puntuacion");

        }
    } else {
        if (txt) {
            var texto = generica("h2", "h2", container, "Has Perdido");
            var otraVez = generica("button", "button", container, "Otra vez")
            otraVez.setAttribute("onclick", "crearElementos()");
            txt = false;
            var puntuacion = generica("h2", "h2", container, "Has ganado " + cont + " veces", "puntuacion");
        }
    }
}

function generica(nombre, tipo, padre, texto, atributo) { //funcion generica para crear los nodos.
    nombre = document.createElement(tipo);
    if (texto != null)
        nombre.innerHTML = texto;
    if (atributo != null)
        nombre.setAttribute("id", atributo);
    if (padre != null)
        padre.appendChild(nombre);
    return nombre;
}