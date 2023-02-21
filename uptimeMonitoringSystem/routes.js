/**
 * Title : Routes
 * Description : Application Routes
 * Author : Mahbub Alam
 * Date : 21/02/2023
 * */
// dependencies
const { sampleHandler } = require('./handlers/routesHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
