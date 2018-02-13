/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/
function oculta(event){
    event.preventDefault();
    //document.getElementById("primerParrafo").classList.add("oculta");
    var texto1 = document.getElementById("primerParrafo");
    texto1.classList.toggle("oculta");
    if (texto1.className == "oculta"){
        document.getElementById("primerEnlace").innerHTML = "Texto ocultado"
    } else {
        document.getElementById("primerEnlace").innerHTML = "Ocultar contenidos"
    }
}
     
function oculta2(event){
    event.preventDefault();
    var texto2 = document.getElementById("segundoParrafo");
    texto2.classList.toggle("oculta");
    if (texto2.className == "oculta"){
        document.getElementById("segundoEnlace").innerHTML = "Texto ocultado"
    } else {
        document.getElementById("segundoEnlace").innerHTML = "Ocultar contenidos"
    }
}

function oculta3(event){
    event.preventDefault();
    var texto3 = document.getElementById("tercerParrafo");
    texto3.classList.toggle("oculta");
    if (texto3.className == "oculta"){
        document.getElementById("tercerEnlace").innerHTML = "Texto ocultado"
    } else {
        document.getElementById("tercerEnlace").innerHTML = "Ocultar contenidos"
    }
}

function init(){
    document.getElementById("primerEnlace").addEventListener("click", oculta);
    document.getElementById("segundoEnlace").addEventListener("click", oculta2);
    document.getElementById("tercerEnlace").addEventListener("click", oculta3);
}
document.addEventListener("DOMContentLoaded",init);


/*function ponClase(event){
    //var texto=event.target.parentNode.children[0];
    var texto=this.parentNode.children[0];

    texto.classList.toggle("oculta");
    if (texto.className == "oculta") {
        this.innerHTML = "Texto Oculto"
    } else {
        this.innerHTML = "Ocultar contenidos"
    }
}

function init(){
    console.log("DOM cargado!");
    var enlaces=document.querySelectorAll(".acordeon");
    for (var item of enlaces){
        item.addEventListener("click", ponClase);
    }
}
*/