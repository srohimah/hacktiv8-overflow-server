const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('Question', new Schema({
    title: String,
    content : String,
    userId : {type: Schema.Types.ObjectId, ref: 'User'}
},{
    timestamps : true,
})
)