const net = require('node:net');


const clients=[]

const server = net.createServer((socket) => {
    console.log("Client Connected",socket);

clients.push(socket);

console.log(`Total connected clients: ${clients.length} `);


socket.write("Welcome to TCP Chat ")
socket.write("type your message")

    socket.on('data', (chunk) => {
        const message= chunk.toString().trim()


        clients.forEach((client)=>{
            client.write(`Client Says: ${message}`)
        })

    });

    socket.on('end',()=>{
        const index= clients.indexOf(socket)

        if(index != -1){

            clients.splice(index,1)
        }

        console.log("A client disconnected");
        console.log(`Total connected clients: ${clients.length} `);
        
        
    })

    // socket.on('end', () => {
    //     console.log("Client Disconnected");
    // });

    socket.on('err',(err)=>{
        console.log("Error: ",err);
        
    })
});

server.listen(1336, () => {
    console.log("Server is Listening on port 1336");
});
