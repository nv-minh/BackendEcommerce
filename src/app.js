const morgan = require("morgan");
const compression = require("compression");
const { default: helmet } = require("helmet");
require("dotenv").config();




const express = require("express");
const app = express();
const configs = require("./configs/environment.config");


// init Middlewares
app.use(morgan("dev"))
app.use(helmet())
app.use(compression())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


// init database
require("./db/mongo.db")

// handling error
app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});
app.use((error, req, res, next) => {
    const statusCode = error.status || 500;
    return res.status(statusCode).json({
        status: "error",
        code: statusCode,
        message: error.message || "Internal Server Error",
    });
});
const PORT = configs.app.port;
app.listen(PORT, () => {
    console.log(`WSV eCommerce start with port: ${PORT}`);
});
module.exports = app;
