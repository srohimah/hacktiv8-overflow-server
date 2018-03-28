const jwt = require('jsonwebtoken')

module.exports ={
    generate : (token)=>{
        return jwt.sign(token, 'secret')
    },
    verify: (req, res, next)=>{
        if(!req.headers.token) return res.status(401).json({message:'not authorized'})
        try {
            let decoded = jwt.verify(req.headers.token, 'secret');
            req.body.id = decoded.id;
            next()
          } catch(err) {
            res.status(403).json({message : 'not authorized'})
          }
    }
}