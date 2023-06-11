'use strict';
const mongoose = require('mongoose');
const {
    db: {host,name, port}
} = require("../configs/environment.config")


const connectString = `mongodb://0.0.0.0:${port}/${name}`;

class Database {
    constructor() {
        this.connect();
    }

    // connect
    connect(type = "mongodb") {
            mongoose.set("debug", true);
            mongoose.set("debug", { color: true });
        mongoose
            .connect(connectString, {
                maxPoolSize: 50,
            })
            .then((_) => {
                console.log(`mongodb://0.0.0.0:${port}/${name}`);
            })
            .catch((error) => console.log(error));
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
