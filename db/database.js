const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URL).then(success => {
    console.log('success')
}).catch(error => { console.log(error); })