

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const topicSchema = new Schema({

    name:{
        type: String,
        required : true
    },

    description:{
        type: String,
        required : true
    },
    index: Number,
    lessons:[ {type: Schema.Types.ObjectId , ref:'Lesson'} ]

})

module.exports = mongoose.model('Topic', topicSchema)