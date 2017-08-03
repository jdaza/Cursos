//Esto es para poder empezar a generar el API.

//Codigo hecho en clase
var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;

module.exports = router;


//Datos del POST
router.post('/', function(req, res){
    var mongo = req.mongo;
    //De esta manera es que se agarran los datos y se la formatea en JSON.
    var data = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        celular: req.body.celular,
        email: req.body.email
    };

    mongo.collection('doctors').insertOne(data, function(err, result){
        if(err){
            //en caso de que haya un error se pasa el error que haya ocurrido en mongo DB
            //Esto puede ser debido a una falla en la conexion
            //Se establece el status error, que es 500, porque es un error en el servidor.
            //Internal error server :)
            var error = new Error(err);
            res.status(500).json(error);
        } else {
            //Muestra los datos en consola antes de serializar el objeto.
            console.log(result);
            res.json(result.ops[0]);
        }
    });
});
