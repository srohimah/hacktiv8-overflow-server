var express = require('express');
var router = express.Router();
const {signIn, signUp} = require('../controllers/user.controller')
 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/signin', signIn)
router.post('/signup', signUp)

module.exports = router;
