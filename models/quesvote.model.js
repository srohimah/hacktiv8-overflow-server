const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Questionvote', new Schema({
    vote : Number,
    questionId : {type: Schema.Types.ObjectId, ref: 'Question'},
    userId : {type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps : true,
})
)