const User = require('../models/user.model')
const hash = require('../middlewares/hasPassword')
const token = require('../middlewares/auth')

module.exports ={
    signUp : (req, res)=>{
        User.findOne({email:req.body.email}).then(dataUser=>{
            if(dataUser){
                res.send({
                    message : "email has been used"
                })
            }else{
                User.create({
                    name:req.body.name,
                    email:req.body.email,
                    password:req.body.password
                }).then(newUser=>{
                    res.status(201).json({
                        message : "new user created",
                        newUser
                    })
                }).catch(err=>res.send(err))
            }
        }).catch(err=>res.send(err))
    },
    signIn : (req, res)=>{
        User.findOne({email : req.body.email}).then(data=>{
            if(data){
                comparePassword = hash.compare(req.body.password, data.password)
                if(comparePassword){
                    res.status(200).json({
                        message : 'logged in',
                        data,
                        token: token.generate({id:data.id, name:data.name})
                    })
                }else{
                    res.status(404).json({
                        message : 'password is incorect'
                    })
                }
            }else{
                res.send('email is incorect')
            }
        }).catch(err=>res.send(err))
    }
}