var express = require('express');
var router = express.Router();
const {verify} = require('../middlewares/auth')
const {addAnswer, showAllAnswer} = require('../controllers/answer.controller')
 
/* GET users listing. */
router.get('/', showAllAnswer)
router.use(verify)
router.post('/', addAnswer)

module.exports = router;
