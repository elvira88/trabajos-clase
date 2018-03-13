/*4.- Crea un nuevo router express con el nombre libros que maneje la ruta /libros  
5.- Dentro del router definir las siguientes rutas:
* get /
* post /add
* get /:id
* get /edit/:id
* post /edit/:id
* get /delete/:id
* get /delete/confirm/:id
En todos estos casos las funciones deverán devolver al cliente (res) el método empleado y la ruta definida
*/

var express = require('express');
var router = express.Router();


    router.get("/",function(req,res){
        res.send("Acceso mediante método GET y ruta /")
});
    router.post("/add",function(req,res){
        res.send("Acceso mediante método POST y ruta /add")
});
    router.get("/:id",function(req,res){
        res.send("Acceso mediante método GET y ruta /:id")
});
    router.get("/edit/:id",function(req,res){
        res.send("Acceso mediante método GET y ruta /edit/:id")
});
    router.post("/edit/:id",function(req,res){
        res.send("Acceso mediante método POST y ruta /edit/:id")
});
    router.get("/delete/:id",function(req,res){
        res.send("Acceso mediante método GET y ruta /delete/:id")
});
    router.get("/delete/confirm/:id",function(req,res){
        res.send("Acceso mediante método GET y ruta /delete/confirm/:id")
});

module.exports = router; //lo más importante de tooodooo
