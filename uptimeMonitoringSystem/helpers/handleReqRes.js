/**
 * Title : Handle Req Res
 * Description : A RESTful API to monitor up or down time of user defined links
 * Author : Mahbub Alam
 * Date : 21/02/2023
 *
 * */
// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
// const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');
const { notFoundHandler } = require('../handlers/routesHandlers/notFoundHandler');

// modue scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handling
    // get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        // eslint-disable-next-line no-param-reassign
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        // eslint-disable-next-line no-param-reassign
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        // response handle
        res.end('Hello world');
    });
};

module.exports = handler;