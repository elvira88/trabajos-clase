/*
A partir de la página web proporcionada, completar el código JavaScript para que:
1.- Cuando se pinche sobre el primer enlace, se oculte su sección relacionada
2.- Cuando se vuelva a pinchar sobre el mismo enlace, se muestre otra vez esa sección de contenidos
3.- Completar el resto de enlaces de la página para que su comportamiento sea idéntico al del primer enlace
4.- Cuando una sección se oculte, debe cambiar el mensaje del enlace asociado
*/

//como comentario está la función genérica que sirve para todos los enlaces

function noEnlaza(event){
    event.preventDefault();
    $("#primerParrafo").toggleClass("oculta");
        if ($("#primerParrafo").hasClass("oculta")){
            $("#primerEnlace").html("Texto cambiado")
        }else{
            $("#primerEnlace").html("Ocultar contenido")
        }
}

function noEnlaza2(event){
    event.preventDefault();
    $("#segundoParrafo").toggleClass("oculta");
        if ($("#segundoParrafo").hasClass("oculta")){
            $("#segundoEnlace").html("Texto cambiado")
        }else{
            $("#segundoEnlace").html("Ocultar contenido")
        }
}

function noEnlaza3(event){
    event.preventDefault();
    $("#tercerParrafo").toggleClass("oculta");
        if ($("#tercerParrafo").hasClass("oculta")){
            $("#tercerEnlace").html("Texto cambiado")
        }else{
            $("#tercerEnlace").html("Ocultar contenido")
        }
}

/*

function ocultaGenerica(event){
    event.preventDefault();
    console.log(this);
    $(this).prev("p").toggleClass("oculta");
    console.log($(this).html());
    -o-  if($(this).prev().hasClass("oculta")){
    -o-  if ($(this).html()=="Ocultar contenidos"){
        $(this).html("Mostrar contenidos);
    }else{
        $(this).html("Ocultar contenidos);
    }
}

*/

function init (){
    console.log("DOM cargado");
    //$("a").click(ocultaGenerica);
    $("#primerEnlace").click(noEnlaza);
    $("#segundoEnlace").click(noEnlaza2);
    $("#tercerEnlace").click(noEnlaza3);
}
$(document).ready(init);