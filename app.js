let config = {};
try {
    config = require(`${__dirname}/config/config.js`);
} catch (e) {
    config = require(`${__dirname}/config/config-default.js`);
}

const WebSocket = require('ws');

const ws = new WebSocket(config.host);


ws.on('open', function open() {
    for (let index = 0; index < config.channels.length; index++) {

        ws.send(JSON.stringify({
            c: 'l', // Command: Listen
            d: config.channels[index], // Data: channel
        }));
        
    }
});

ws.on('message', function incoming(data) {
    console.log(data);  
});