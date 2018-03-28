var express = require('express');
var router = express.Router();
const {verify} = require('../middlewares/auth')
const {showAllquestion, addQuestion} = require('../controllers/question.controller')
 
/* GET users listing. */
router.get('/', showAllquestion)
router.use(verify)
router.post('/', addQuestion)

module.exports = router;
