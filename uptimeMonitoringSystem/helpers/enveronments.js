/**
 * Title : Enverionment
 * Description : handle all enverionment related stuffs
 * Author : Mahbub Alam
 * Date : 22/02/2023
 * */
// dependencies
// module scaffloding
const enverionments = {};

enverionments.staging = {
    port: 3000,
    envName: 'staging',
};

enverionments.production = {
    port: 5000,
    envName: 'production',
};

//
// determine which enverionment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'string' ? process.env.NODE_ENV : 'staging';

// export corrosponding object
const enverionmentToExport =
    typeof enverionments[currentEnvironment] === 'object'
        ? enverionments[currentEnvironment]
        : enverionments.staging;

// export module
module.exports = enverionmentToExport;
