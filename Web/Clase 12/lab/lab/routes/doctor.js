//Esto es para poder empezar a generar el API.

//Codigo hecho en clase
var express = require('express');
var router = express.Router();
var ObjectID = require('mongodb').ObjectID;


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

    router.get('/', function(req, res) {
        var mongo = req.mongo;
        mongo.collection('doctors').find().toArray(function(err, docs){
            res.json(docs);
        });
    });

    router.get('/:id', function(req, res){
        var mongo = req.mongo;
        var id = req.params.id;
        console.log("HOLA");
        console.log( ObjectID);
        mongo.collection('doctors').findOne({_id: new ObjectID(id)}, {}, function(err, doc){
            if(err){
                res.status(500).json(new Error(err));
            }
            res.json(doc);
        });
    });


    //PUT
    router.put('/:id', function(req, res){
        var id = req.param.id;
        var body = req.body;
        var mondo = req.mongo;

        if(typeof body != 'undefined' && body){
            mongo.collection('doctors').updateOne({ _id: new ObjectID(id) }, {$set: body}, function (err, result){
                if(err) {
                    var error = new Error(err);
                    res.status(500).json(error);
                }

                mongo.collection('doctors').findOne({_id: new ObjecID(id)}, {}, function(err, req){
                    if(err){
                        var error = new Error(err);
                        res.status(500).json(error);
                    }

                    res.json(doc);
                });
            });
        } else {
            res.status(400).json('Bad Request');
        }
    });

    router.delete('/:id', function(req, res){
        var id = req.params.id;
        var mongo = req.mongo;

        mongo.collection('doctors').findOneAndDelete({_id: new ObjecID(id)}, {}, function(err, result){
            if(err){
                res.status(500).json(new Error(err));
            }
            res.status(200).json('Was deleted successfully');
        });
    });

module.exports = router;