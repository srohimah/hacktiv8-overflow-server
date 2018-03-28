const mongoose = require('mongoose')
const Schema = mongoose.Schema
const has = require('../middlewares/hasPassword')

module.exports = mongoose.model('User', new Schema({
    name : String,
    email : String,
    password : String,
},{
    timestamps : true,
})
    .pre('save',function(){
        if(this.password)this.password = has.generate(this.password)
    })
)