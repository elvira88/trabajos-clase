var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var objetoJSON = {propiedad:"valor"};
    res.setHeader("Content-Type","application/json");
    res.send(JSON.stringify(objetoJSON));
});

router.get('/libros', function(req, res, next) {
    var libros = [{titulo:"El señor de los anillos", autor:"J. R. R. Tolkien"}, {titulo:"Origen", autor:"Dan Brown"}, {titulo:"La reina descalza", autor:"Ildefonso Falcones"} ,{titulo:"1984", autor:"George Orwell"}];
    res.setHeader("Content-Type","application/json");
    res.send(JSON.stringify(libros));
});

router.post('/login', function(req,res,next){
    res.setHeader("Content-Type","application/json");
    var objeto;
    if(req.body.usuario=="admin" && req.body.password=="admin"){
        objeto={result:true};
    }else{
        objeto={result:false};
    }
    res.send(JSON.stringify(objeto));
});

module.exports = router;