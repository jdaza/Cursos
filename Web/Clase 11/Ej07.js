var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    var nuevo_archivo = fs.createWriteStream('file_upload.pdf');
    req.pipe(nuevo_archivo);
    req.on('end', function(){
        res.end('uploaded');
    });
}).listen(8080);

//node ej07.js
//download curl
//$ curl --upload-file readme.md http://localhost:8080
//$ curl --upload-file file.pdf http://localhost:8080