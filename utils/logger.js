const { model } = require("mongoose");
const {createLogger, transports, format, level,}=require("winston");
const redis = require("winston-redis");


const logger= createLogger({
    transports:[
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({ level, message }) => `${level}: ${message}`))
        })
    ],
    format:format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    )
});
module.exports=logger