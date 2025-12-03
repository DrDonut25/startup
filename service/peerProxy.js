const { WebSocketServer } = require('ws');

function peerProxy(httpServer) {
    const wss = new WebSocketServer({ server: httpServer });

    wss.on('connection', (ws) => {
        ws.isAlive = true;

        //message handler -> send to other clients (but only ones that are logged in)
        ws.on('message', (data) => {
            wss.clients.forEach((client) => {
                //check that client is either not current user and that client is currently logged in
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    ws.send(data);
                }
            });
        });

        //ping handler
        ws.on('pong', () => {
            ws.isAlive = true;
        })

        //ping logged-in clients to ensure they're still active
        setInterval(() => {
            wss.clients.forEach((client) => {
                if (!client.isAlive) {
                    return client.terminate();
                }

                //set isAlive to false for client, then ping—if client is alive, ping function will set isAlive back to true
                client.isAlive = true;
                client.ping();
            })
        },10000);
    });
}

module.exports = { peerProxy };