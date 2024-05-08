



const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const quizSchema = new Schema({

    question:{
        type: String,
        required : true
    },

    optionA:{
        type: String,
        required : true
    },

    optionB:{
        type: String,
        required : true
    },

    optionC:{
        type: String,
        required : true
    },

    optionD:{
        type: String,
        required : true
    },

    answer:{
        type: String,
        required : true
    },

    topicId: {type:Schema.Types.ObjectId, ref:'Topic'},

})

module.exports = mongoose.model('Quiz', quizSchema)