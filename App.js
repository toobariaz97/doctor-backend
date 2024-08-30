require('dotenv').config();
require('./config/db');
const express= require("express");
const logger = require('./utils/logger');
const newsRoute = require('./routes/newsRoute');
const app=express();
const PORT= 3000|  process.env.PORT


app.use(express());
app.use(express.json());
app.use(express.urlencoded({extends:true}));
app.use('/api/news',newsRoute)

app.listen(PORT,()=>{
    logger.log({
        level:"info",
        message:`I am running on port ${PORT}`
    });
})