/**
 * lb   //Para levantar el server
 * umss
 * umss
 * 3.x
 * empty server
 * 
 * cd umss      //change directory to your app
 * lb model     //Create a model in your app
 * node .       //run the app
 * lb datasource
 * 
 * Enter the datasource name:
 * mongo
 * mongoDB*Supported by strongLoop)
 * 
 * 
PS E:\Cursos\Cursos\Web\Clase 14 Chat> cd umss
PS E:\Cursos\Cursos\Web\Clase 14 Chat\umss> lb datasource
? Enter the datasource name: mongo
? Select the connector for mongo: MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database): localhost
? host: localhost
? port: 27017
? user:
? password:
? database: umss
? Install loopback-connector-mongodb@^1.4 Yes


lb model
estudiante

PS E:\Cursos\Cursos\Web\Clase 14 Chat\umss> lb model
? Enter the model name: estudiante
? Select the datasource to attach estudiante to: mongo (mongodb)
? Select model's base class PersistedModel
? Expose estudiante via the REST API? Yes
? Custom plural form (used to build REST URL):
? Common model or server only? common
Let's add some estudiante properties now.



 */

<http>
    <body>
        <div class="">
            CHAT
        </div>

        <div id="future_messages">
            
        </div>
            <input id="messages"/>
        <div >
            
        </div>
    </body>

</http>

var express = require('express');
var app = express();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + 'node_modules'));
app.use('/', function(req, res, next){
    res.sendfile(__dirname + '/index.html');
    //next();
});

io.on('connection', function(socket){
    console.log('Usuario conectado al chat');

    socket.on('connect', function(data){
            console.log(data);
        });

    socket.on('chat_client', function(message){
        console.log(message);
        var ms = '<div>' + mensaje + '</div>';
        $('#future_messages').append(ms);
    });

    
});