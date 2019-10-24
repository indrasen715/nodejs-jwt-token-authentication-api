const express = require('express')
const bodyParser = require('body-parser');
const app = express();
const authRouter = require('./api/routes/User')
const database = require('./db/database')
const apiCredentialsMiddleware = require('./api/middleware/api-credentials')

const port = process.env.port || 3000;
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

//authentication route
app.use('/api/v1/auth/', apiCredentialsMiddleware, authRouter)


app.listen(port=>{
    console.log("server is runing on port"+port)
})