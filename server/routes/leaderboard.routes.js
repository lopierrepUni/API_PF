const express = require("express");
const router = express.Router();

const leaderboard = require("../controllers/leaderboard.controller");

router.get("/", leaderboard.getAll);
router.post("/", leaderboard.createInstance);
router.route("/:id", leaderboard.updateInstance);

module.exports = router;
