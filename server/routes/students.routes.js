const express = require("express");
const router = express.Router();

const student = require("../controllers/student.controller");

router.get("/", student.getStudents);
router.get("/:id", student.getStudents);

module.exports = router;
