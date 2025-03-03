const net = require('node:net');

const server = net.createServer((socket) => {
    console.log("Client Connected");

    socket.on('data', (chunk) => {
        console.log("Received data:", chunk.toString());

        socket.write(`Received: ${chunk.toString()}`);
    });

    socket.on('end', () => {
        console.log("Client Disconnected");
    });

    socket.on('err',(err)=>{
        console.log("Error: ",err);
        
    })
});

server.listen(1336, () => {
    console.log("Server is Listening on port 1336");
});
