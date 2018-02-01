/*
1.- Crea un fichero HTML con un fichero JS asociado
2.- Crea un div contenedor que tenga 3 divs dentro
3.- Pinta los 3 divs para que quepan los tres a la vez a la misma altura y tengan fondo rojo
4.- El primer div será arrastrable, comprueba que se puede arrastrar.
5.- asigna el evento dragstart al primer div, asócialo con una función llamada empezando
6.- dentro de la función empezando recuerda mandar un dato con el índice "iden" y con el valor del identificativo del primer div (setData)
7.- Haz que cuando se haya entrado en el segundo div saque un mensaje por consola (arrastrando)
8.- Haz que cuando se haya salido del segundo div saque un mensaje por consola
9.- Haz que cuando se pasee sobre el tercer div anule el comportamiento por defecto (arrastrando)
10.- Haz cuando se suelte el arrastrable (drop) en el tercer párrafo, anula el comportamiento por defecto y saca un mensaje por pantalla
11.- En la función anterior saca por pantalla el identificativo del div que se haya mandado en el dragstart
*/
function empezando(event){
    console.log("Empezando");
    event.dataTransfer.setData("iden",event.target.id);
};

function entrar(){
    console.log("Arrastrando");
};

function salir(){
    console.log("Saliendo"); 
};

function pasear(event){
    console.log ("Entra en el div3");
    event.preventDefault()
};

function soltar(event){
    console.log("Div soltado");
    event.preventDefault();
    var data = event.dataTransfer.getData("iden");
    var midiv = document.getElementById("div3");
    console.log(midiv);
    midiv.innerHTML+="<p>Identificativo:"+data+"</p>";
};

function init(){
    console.log ("DOM cargado")
    var div1 = document.getElementById("div1");
    div1.addEventListener("dragstart", empezando);
    var div2 = document.getElementById("div2");
    div2.addEventListener("dragenter", entrar);
    div2.addEventListener("dragleave", salir);
    var div3 = document.getElementById("div3");
    div3.addEventListener("dragover", pasear);
    div3.addEventListener("drop", soltar);
    
}
document.addEventListener("DOMContentLoaded", init);