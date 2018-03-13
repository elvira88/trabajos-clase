#!/usr/bin/env node
/*
1.- Crea un nuevo proyecto express en un directorio llamado ejercicio4
2.- Crea una nueva ruta llamada /creaCookie que sea capaz de mandar una cookie al cliente con el nombre "idioma" y el valor "es_ES" para el dominio localhost y que no tenga fecha de expiración*/
var express = require ('express');
var galleta = require ('cookie-parser');

var app = express();
app.use(galleta());

app.get("/creaCookie", function(req, res){
    res.galleta("Idioma","es_ES", {domain:"localhost"});
    res.send("He mandado mi primera cookie!");
});

/*3.- Crea una nueva ruta llamada /muestraCookies que devuelva un listado en html (ul-li) y en cada li mostrar el nombre de la cookie y el valor almacenado*/

app.get("/muestraCookies", function(req,res){
    res.send("<ul><li>" +req.cookies.Idioma+ "</li></ul>");
});

//creamos un nuevo express y lo usamos

var libros = require('./libros');
app.use('/libros', libros);


app.listen(4000, function(){
   console.log("Funcionando en el puerto 4000"); 
});
