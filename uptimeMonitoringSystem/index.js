/**
 * Title : Uptime Monitoring System
 * Description : A RESTful API to monitor up or down time of user defined links
 * Author : Mahbub Alam
 * Date : 21/02/2023
 * */

// dependencies
const http = require('http');
const url = require('url');

// app object - module scaffolding
const app = {};

// configarations
app.config = {
    port: 3000,
};

// create a server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`listing to port ${app.config.port}`);
    });
};

// handle Request Response
app.handleReqRes = (req, res) => {
    // request handling
    // get the url and perse it
    const perseUrl = url.parse(req.url, true);
    console.log(perseUrl);
    // response handle
    res.end('hello world ');
};

// start the server
app.createServer();
