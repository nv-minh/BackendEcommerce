"use strict";

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3055,
    },
    db: {
        host: process.env.DEV_DB_HOST || "localhost",
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || "dev",
    },
};
const production = {
    app: {
        port: process.env.PRODUCTION_APP_PORT || 3002,
    },

    db: {
        host: process.env.PRODUCTION_DB_HOST || "localhost",
        port: process.env.PRODUCTION_DB_PORT || 27017,
        name: process.env.PRODUCTION_DB_NAME || "production",
    },
};
const configs = { dev, production };
const env = process.env.NODE_ENV || `dev`;
module.exports = configs[env];
