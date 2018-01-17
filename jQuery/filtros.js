/*
1. Crea un fichero filtros.html e incluye Jquery
2. Incluye 3 listados desordenados de 10 elementos de texto cada uno
3. Haz que el tercer elemento del primer listado tenga el fondo amarillo
4. Haz que el cuarto elemento del primer listado tenga el fondo amarillo, pero seleccionando primero el tercer elemento
5. Haz que el primer ul tenga un id pero entrando desde el tercer elemento
6. Haz que en el segundo listado todos los elementos tengan un fondo rojo pero entrando desde el primer elemento
*/

function init(){
    console.log("DOM cargado");
    
    $("#ul1 li").eq(2).css("background-color","yellow");
    //tb podría ser
    //$("ul:first li:nth-child(3)").css("background-color","yellow");
    
    $("#ul1 li:nth-child(3)").next().css("background-color","yellow");
    //tb podría ser
    //$("#ul1 li").eq(2).next().css("background-color","yellow");
    
    $("#ul1 li:nth-child(3)").parent().attr("id","nuevoId");
    //tb podría ser
    //$("#ul1 li").eq(2).parent().attr("id","nuevoId");
    
    $("#ul2 li:first").css("background-color","red");
    $("#ul2 li").eq(0).siblings().css("background-color","red");
    //tb podría ser
    //$("body ul:nth-child(2) li:first").parent().children().css("background-color","red");
    //$("ul:eq(1) li:first).parent().children().css("background-color","red");
}

$("document").ready(init);