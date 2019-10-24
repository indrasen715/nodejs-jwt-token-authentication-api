const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    Password: {
        type: String,
        required: true
    },
    IsDeleted: {
        type: Boolean,
        default: false
    },
   
    Address: {
        type: String,
        required:false,
        default:null
    },
    Phone: {
        type: Number,
        required:false,
        default:null
    },
    FirstName: {
        type: String,
        default: null,
        required:false
    },
    LastName: {
        type: String,
        default: null,
        required:false
    },
    Role: {
        type: String,
        required: true,
        default:null
    },
    CreatedAt: {
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('User', userSchema)