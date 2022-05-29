const express = require('express')
const bodyParser = require('body-parser');
require('dotenv').config();

require('./db/database')
const app = express();
const authRouter = require('./api/routes/User')
const apiCredentialsMiddleware = require('./api/middleware/api-credentials')

const port = process.env.PORT || 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//authentication route
app.use('/api/v1/auth/', apiCredentialsMiddleware, authRouter)


app.listen(port,()=>{
    console.log("Your API Server is runing on port: "+port)
})