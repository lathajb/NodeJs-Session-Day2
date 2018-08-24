var http = require('http');
var socket = require('socket.io');
var fs = require('fs');


var hostname= "127.0.0.1";

var port = 4000;

var server = http.createServer((req,res) => {
    fs.readFile('clientpeer.html',function(err,dataFromFile){
        if(!err){
            res.writeHead(200,{"Content-Type" : "text/html"})
            res.end(dataFromFile);
        }
    })
});

var io = socket.listen(server);

io.sockets.on('connection',(skt) => {
    setInterval(() => {
        var dataFromServer = new Date();
        skt.emit('messageForClientPeer1',dataFromServer);
    },2000);

    skt.on('messageFromClientPeer1',(dataFromClient) =>{
        console.log('data from Client Peer : ' + dataFromClient);
    });
});

server.listen(port,hostname,() => {
    console.log(   `Server is running at ${hostname} : ${port}`);
})

