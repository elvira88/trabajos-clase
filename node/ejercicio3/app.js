#!/usr/bin/env node
//este texto de arriba TIENE que estar en la línea 1 o si no no funciona!!!!
var express = require ('express');
var bodyParser = require('body-parser');


var app = express();
//app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
/*1.- Todos los ejercicios deberán ser resueltos en una carpeta llamada ejercicio3
2.- Crea una aplicación express, arráncala y comprueba que sepuede acceder correctamente a ella
3.- Gestiona las peticiones que entre por la URL (/libros) para los métodos Get y Post. Devuelve un texto que indique que método es el que se ha empleado para hacer la petición*/

app.get('/libros', function (req, res) {
    res.send('Usado método GET para esto');
    res.end();
});

app.post('/libros', function (req, res) {
    res.send('Usado método POST para esto');
});
// tb puedes hacer app.route para escribir menos código

/*
4.- Crea una nueva ruta en la aplicación que devuelva un listado html con las provincias de castilla y león accesible desde la url /provincias y el método get*/

app.get('/provincias', function (req, res) {
    res.send('<ul><li>Ávila</li><li>Burgos</li><li>Salamanca</li><li>Soria</li><li>Segovia</li><li>Palencia</li><li>Valladolid</li><li>Zamora</li><li>León</li></ul>');
    res.end();
});

/*5.- Crea una nueva ruta en la aplicación que sea capaz de recoger los datos de un formulario enviados vía post a la url /provincias. Esto deberá devolver un objeto con los datos enviados por el formulario.*/

app.post('/provincias', function (req, res) {
    var provincia = req.body.provincia;
    res.send('Provincia: '+ provincia);
});

/*6.- Crea una nueva ruta variable que sea del tipo /get/miidentificativo donde mi midentificativo sea variable. Haz que devuelva el valor que se le ha dado cada vez a ese identificativo*/

app.get('/get/:miidentificativo', function (req, res) {
    res.send('El identificativo es '+ req.params.miidentificativo);
});

/*7-.Crea un nueva ruta para la edición y borrado de items ambas tendrán una ruta parecida al ejercicio 6 /edit/miiden /delete/miiden. En ambos casos se devolverá el identificativo. En el caso de la edición se enviará una petición POST, en el caso del borrado será GET.*/

app.post('/edit/:miidentificativo', function(req, res){
    console.log(req.body);//recoge TOOODOS los datos que se han enviado en el formulario
    res.send('Editar '+ req.params.miidentificativo);
});

app.get('/delete/:miidentificativo', function(req, res) {
    res.send('Borrar '+ req.params.miidentificativo);
    res.end();
});

/*8.- Pasa una serie de parámetros por URL en el formato ?+&. Los datos a pasar son username y password. Devuelve true o false dependiendo de si ambos son "admin" la URL será /login y se hará vía POST.*/

//  1-->/login?username=admin&password=admin
//  2-->/login/:username/:password
app.post('/login', function(req,res){
        console.log(req.body);
        var user = req.body.username; //(esto de .body es si es formulario)  req.query.username  (si no es formulario)
        var pass = req.body.password; //(esto de .body es si es formulario)  req.query.username  (si no es formulario)
        if(user == "admin" && pass == "admin"){
            res.send( true);            //devuelve, NO return
        }else{
            res.send(false);
        }
});

//lanzamiento del servidor
app.listen(3000, function () {
  console.log('App de ejemplo atenta en el puerto 3000!');
});