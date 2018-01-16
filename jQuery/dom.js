/*1. Crea un fichero dom.html e incluye Jquery
2. Incluye un párrafo en el html, y luego modifica el contenido del párrafo desde Jquery.
3. Inserta otro párrafo al final del body con Jquery
4. Inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
5. Modifica el color de fondo del último párrafo del HTML con Jquery
6. Añade un id al último párrafo desde Jquery
7. Quita el id al último párrafo desde Jquery
8. Asigna la clase rojo al último párrafo
9. Imprime por consola las clases que tiene asignadas el último párrafo
10. Coloca un formulario de login en el HTML
11. Asigna un id al campo nombre
12. imprime por consola el valor del campo nombre*/

function init(){
    console.log("DOM cargado correctamente!");
    
    //modifica el contenido del párrafo desde Jquery.
    $("#parrafo1").html("Contenido nuevo de mi primer párrafo");
    //como solo hay un p podría ser
    //$("p").html("Contenido nuevo");
    
    //inserta otro párrafo al final del body con Jquery
    $("body").append("<p class='p3'>Creado con jQuery</p>");
    
    //inserta un párrafo entre los dos párrafos anteriores y colócale un texto con Jquery
    $("#parrafo1").after("<p class='p2'>Éste sería el hermano mediano</p>");
    //tb podría ser
    //$("p:last").before(<p class='p2'>Éste sería el hermano mediano</p>");
    
    //modifica el color de fondo del último párrafo del HTML con Jquery
    $(".p3").css("background-color","lightblue");
    //tb podría ser
    //$(p:last).css("background-color","lightblue");
    
    //añade un id al último párrafo desde Jquery
    $(".p3").attr("id","parrafo3");
    //tb podría ser
    //$(p:last).attr("id","parrafo3");
    
    //quita el id al último párrafo desde Jquery
    $(".p3").removeAttr("id");
    //tb podría ser
    //$(p:last).removeAttr("id");
    
    //asigna la clase rojo al último párrafo. Si usas attr cambia una clase x otra
    $(".p3").addClass("rojo");
    //tb podría ser
    //$(p:last).addClass("rojo");
    
    //imprime por consola las clases que tiene asignadas el último párrafo
    var arrayClases=$("p:last").attr("class").split(" ");
    console.log(arrayClases);
    
    //asigna un id al campo nombre (hecho usando atributo)
    $("[name='name']").attr("id","nombre");
    
    //imprime por consola el valor del campo nombre
    var campoNombre=$("#nombre").val();
    console.log(campoNombre);
    //lo mismo (sin definir la variable)
    //console.log($("#nombre").val());
    
}
$("document").ready(init);