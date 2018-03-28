const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Answervote', new Schema({
    vote : Number,
    answerId : {type: Schema.Types.ObjectId, ref: 'Answer'},
    userId : {type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps : true,
})
)