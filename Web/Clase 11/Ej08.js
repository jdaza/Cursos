var http = require('http');
var fs = require('fs');

http.createServer(function (req, res){
    // var currentdate = new Date(); 
    // var datetime = "Last Sync: " + currentdate.getDate() + "/"
    //             + (currentdate.getMonth()+1)  + "/" 
    //             + currentdate.getFullYear() + " @ "  
    //             + currentdate.getHours() + ":"  
    //             + currentdate.getMinutes() + ":" 
    //             + currentdate.getSeconds();

    // res.write(currentdate.toLocaleTimeString());
    var nuevo_archivo = fs.createWriteStream('file_uploaded_progress.pdf');
    var totalBytes = req.headers['content-length'];
    var uploadedBytes = 0;

    req.pipe(nuevo_archivo);
    req.on('data', function(pedazo_archivo){
        uploadedBytes += pedazo_archivo.length;
        var progress = (uploadedBytes/totalBytes) * 100;
        res.write('progress: ' + parseInt(progress, 10) + "%\n");
    });

    req.on('end', function(){
        res.end('File Uploaded!!!');
    });

}).listen(8080);

//node 
//curl --upload-file