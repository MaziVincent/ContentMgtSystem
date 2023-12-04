
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const learningPathSchema = new Schema({

    name:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required : true
    },
    imageUrl:String,
    language:String,
    framework:String,
    
    modules:[{type: Schema.Types.ObjectId , ref:'Module'}]

})

module.exports = mongoose.model('LearningPath', learningPathSchema)