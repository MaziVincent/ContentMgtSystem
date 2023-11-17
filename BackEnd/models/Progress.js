
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const progressSchema = new Schema({

    user: {type: Schema.Types.ObjectId, ref: 'User'},
    learningPath: {type: Schema.Types.ObjectId, ref: 'User'},
    module:{ type: Schema.Types.ObjectId, ref:'Module'},
    topic:{ type: Schema.Types.ObjectId, ref:'Topic'},

})