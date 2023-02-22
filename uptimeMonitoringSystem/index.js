/**
 * Title : Uptime Monitoring System
 * Description : A RESTful API to monitor up or down time of user defined links
 * Author : Mahbub Alam
 * Date : 21/02/2023
 * */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const enverionment = require('./helpers/enveronments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testing file system
// will remove later
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(enverionment.port, () => {
        console.log(`listing to port : ${enverionment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
