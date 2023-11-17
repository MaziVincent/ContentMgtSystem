


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const moduleSchema = new Schema({

    name:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required : true
    },
    topics:[{type: Schema.Types.ObjectId , ref:'Topic'}]

})

module.exports = mongoose.model('Module', moduleSchema)