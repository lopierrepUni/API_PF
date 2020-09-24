const express = require("express");
const router = express.Router();
const answer = require('../controllers/answer.controller')

router.post('/:id', answer.createAnswer)
router.get('/:id', answer.getAnswerByHistoryEntry)

module.exports = router;