const Question = require('../models/question.model')
const jwt = require('jsonwebtoken')

module.exports ={
  showAllquestion: function (req, res){
    Question.find().sort([['updatedAt', 'descending']]).populate('userId').exec().then(data=>{
      res.status(200).json({
        message: 'list question',
        data
      })
    }).catch(err=>res.send(err))
  },
  addQuestion: function (req, res){
    let token = req.headers.token
    var decoded = jwt.verify(token, 'secret');
    Question.create({
      title : req.body.title,
      content : req.body.content,
      userId : decoded.id
    }).then(data=>{
      res.status(201).json({
        message : 'question created',
        data
      }).catch(err=>res.send(err))
    })
  },
  findOneQuestion: function (req, res){
    Question.find(req.params.id).then(data=>{
      res.status(200).json({
        message : 'data'
      })
    })
  }
}