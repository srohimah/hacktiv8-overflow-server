const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports ={
    generate : (password)=>{
        return bcrypt.hashSync(password, bcrypt.genSaltSync(saltRounds))
    },
    compare : (password, hasPassword)=>{
        return bcrypt.compareSync(password,hasPassword)
    }
}