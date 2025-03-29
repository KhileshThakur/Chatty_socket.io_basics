const app = require('express')();

const server = require('http').createServer(app);

const io = require('socket.io')(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowHeaders: ["my-custom-header"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log("what is socket", socket);
    console.log("Socket is connected", socket.id);

    socket.on("chat", (payload) => {
        console.log("what is payload", payload);
        io.emit("chat", payload);
    });
})

server.listen(5000, () => {
    console.log("Server is running on port 5000 ...");
});