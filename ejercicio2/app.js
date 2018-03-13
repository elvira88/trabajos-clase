#!/usr/bin/env node

var express = require("express");
var app = express();
console.log("App arrancado!!");

app.get("/",function(req,res){
 res.send("GET de barra");   
});

app.get("/miget",function(req,res){
    console.log("estoy en miget");
    res.send("<h1>miGET</h1>");
});
/* he hecho un cambio sobre el servidor,estoy dentro del mismo servidor pero en otra url por lo que reinicio con la consola para poder ver los cambios que he hecho--> Ctrl+C en consola */

app.get("/otroGet",function(req,res){
    res.send("<h1>Otro Get</h1>");
});
/* he hecho un cambio sobre el servidor,estoy dentro del mismo servidor pero en otra url por lo que  reinicio con la consola para poder ver los cambios que he hecho --> Ctrl+C en consola */

//lanzamiento del servidor
app.listen(3000,function(){
    console.log("Example app listening on port 3000!");
});
//hasta que no haces el listen no arranca el servidor
//si entras a localhost:3000 te pone en el html: Cannot GET / xq no está definido el get/ aún (no estaba hecho el get). lo hace express por defecto