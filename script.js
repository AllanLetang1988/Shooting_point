
//Aqui vamos a hacer que nuestra programa crea animaciones
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0, 0, 800, 600);

    var radio = 10;

function dibujarCircumferencia(x,y,radio, color){
    pincel.fillStyle = color;
    pincel.beginPath(); 
    pincel.arc(x,y,radio,0,2*Math.PI);
    pincel.fill();
}
function limpiarPantalla(){
    pincel.clearRect(0,0,800,600);
}

var x = 0
var xAleatorio;
var yAleatorio;

function dibujarObjetivo(x,y){
    dibujarCircumferencia(x,y,radio + 20,"red");
    dibujarCircumferencia(x,y,radio + 10,"white");
    dibujarCircumferencia(x,y,radio,"red");
}

function sortearPosicion(maximo){
    return Math.floor(Math.random()*maximo);

}

function actualizarPantalla(){
    limpiarPantalla();
    xAleatorio = sortearPosicion(800);
    yAleatorio = sortearPosicion(600);
    dibujarObjetivo(xAleatorio,yAleatorio);
    x++;

}

setInterval(actualizarPantalla,1000);

function disparar(evento){
    var x = evento.pageX - pantalla.offsetLeft;
    var y = evento.pageY - pantalla.offsetTop;

    if ((x < xAleatorio + radio) &&
        (x > xAleatorio - radio) &&
        (y < yAleatorio + radio) &&
        (y > yAleatorio - radio)) {
        alert("WELL DONE BUDDY, YOU WON");
    }
    
}

pantalla.onclick = disparar;

    