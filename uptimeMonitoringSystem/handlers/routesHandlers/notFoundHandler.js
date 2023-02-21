// module scaffolding
const handler = {};

handler.notFoundHandle = (requestProperties, callback) => {
    callback(404, {
        message: 'your request url was not found ',
    });
};

module.exports = handler;
