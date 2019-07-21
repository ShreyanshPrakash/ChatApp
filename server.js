var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

const path = require('path');
const port = process.env.PORT || 3200;

server.listen(port, function(){
    console.log(`Example app listening on port ${port}!`);
});

app.use(express.static(path.join(__dirname,'dist/ChatApp')));
app.get('', (req,res) => {
    res.sendFile(path.join(__dirname,'dist/ChatApp/index.html'))
});

// Socket Implementation
io.on('connection', function(socket){
    console.log("Its alive "+socket.client);
    // socket.emit('chatApp', { hello: 'world' });
    socket.on('chatApp', function(data){
        console.log("data "+data);
        // io.sockets.emit('chatApp', data);
        socket.broadcast.emit('chatApp', data);
    });
});
