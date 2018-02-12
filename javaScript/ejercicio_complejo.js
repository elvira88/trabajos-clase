/*1.- crea un html y asocia un fichero JS
2.- Descarga desde la URL: http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001 y colócalos en un variable llamada tiendas
3.- Presenta los resultados en la petición ajax por pantalla en un formato de listado, donde debe aparecer exclusivamente el dato "agentfirstname" en cada elementos visual
4.- Incluye un campo de texto de formulario llamado id:"texto" y haz que cada vez que se pulse una tecla almacene el valor del campo en la variable criterio
5.- Crea una función que sea capaz de filtrar los resultados de una búsqueda de tiendas mediante un texto. En los resultados que debe devolver la función sólo deberán estar aquellos que contengan dicho texto en el campo "agentfirstname"
6.- Aplicar a que se presenten sólo los resultados que contengan el texto de la variable criterio, según vaya cambiándose (tecla a tecla)*/

var tiendas;
var criterio;
function cogeDatos(){
    $.get("http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=80001", function(datos){
        tiendas = datos;
        for(i in tiendas){
           if(tiendas[i].agentfirstname!=undefined && tiendas[i].agentfirstname.toLowerCase().includes(criterio)){
            $("#resultados").append(`<li>Hemos encontrado a ${tiendas[i].agentfirstname} en la posicion ${i}</li>`);
            }
    }
    })
};    
$("#texto").keyup(function(){
    criterio = $("#texto").val();
});