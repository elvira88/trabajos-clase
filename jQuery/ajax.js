/*
Ajax
1 Crea un fichero llamado ajax.html y asociale Jquery
2 Crea una función init asociada al document.ready
3 Mete un botón con el texto "Get" y el id "getAjax" en el HTML y asociale una función al click
4 Crea un fichero llamado titulo.html que contenga un elemento h1 con un texto
5 Crea un div en el ajax.html con el id="resultados", en est div iremos presentando los resultados de las peticiones ajax
6 Haz que la función del click del botón "Get" haga una petición get al fichero titulo.html y presente los datos que devuelva la petición dentro del div de resultados
7 Recupera del repositorio de github el fichero formularios.php, este fichero es donde intentaremos mandar los datos de la petición post
8 Crea un botón con el texto "post" con el id postAjax en el fichero ajax.html asóciale una función al click
9 Dentro de la función del click del botón Post haz una llamada post al fichero formularios.php, envía los datos de un usuario: nombre: Pepe, dir: Calle mayor, ciudad: Madrid, años: 34.
10 Al gestionar los datos devueltos por el servidor de la petición post imprime los datos devueltos por el div de resultados.
11 Comprueba que los mismos datos que has enviado estén en los datos que has recibido
12 Recupera el fichero ajax.json del repositorio de github
13 Crea un botón con el texto "Coge  Json" y el id getJson y asócialo a una función del click
14 Haz que cuando se pulse el botón Coge Json realice una petición get al fichero ajax.json e imprima los datos dentro del div de resultados
15 Cambia la impresión de resultados del ejercicio anterior para que mediante un "bucle" imprima uno a uno los datos del array dentro de un párrafo por cada resultado
*/
function peticionGet(){
    $.get("titulo.html",function(datos){
        console.log("success");
        $("#resultados").html(datos);
    })
    .done(function(){
        console.log("second success");
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.log("error" + textStatus);
        console.log("incoming Text" + jqXHR.responseText);
        console.log("error " + errorThrown);
    })
    .always(function(){
        console.log("finished");
    });
}

function postAjax(){
    $.post("formulario.php",{"nombre":"Pepe","dir":"Calle Mayor","ciudad":"Madrid","años":34},function (datos){
        console.log("Success");
        $("#resultados").html(datos);
    })   
    .done(function(){
        console.log("second success");
    })
    .fail(function(jqXHR,textStatus,errorThrown){
        console.log("error" + textStatus);
        console.log("incoming Text" + jqXHR.responseText);
        console.log("error " + errorThrown);
    })
    .always(function(){
        console.log("finished");
    });
}

function limpiaResultados() {
    $("#resultados").html("");
}

function getJson(){
    limpiaResultados();
    $("#resultados").html("<h1>Cargando</h1>");
    $.getJSON("ajax.json", function(result){
        console.log("entro en success");
        limpiaResultados();
        console.log(result);
        $.each(result, function (i, resultado) {
                $("#resultados").append("<p>" + resultado.nombre + ":"+resultado.diputados+"</p>");
            });
        })

    .fail(function(jqXHR,textStatus,errorThrown){
        console.log("error" + textStatus);
        console.log("incoming Text" + jqXHR.responseText);
        console.log("error " + errorThrown);
    });
}


function init(){
    console.log("DOM cargado");
    $("#getAjax").click(peticionGet);
    $("#postAjax").click(postAjax);
    $("#getJson").click(getJson);
    
}
$("document").ready(init);