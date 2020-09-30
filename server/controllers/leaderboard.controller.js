const Leaderboard = require("../models/Leaderboard");
const Student = require("../models/Student");
const express = require("express");
const leaderboardCtrl = {};

leaderboardCtrl.getAll = async (req, res) => {
  const leaderboard = await Leaderboard.find();
  res.json(leaderboard);
};

leaderboardCtrl.createInstance = async (req, res) => {
  const leaderboard = new Leaderboard({
    user_id: req.params.id,
    score: req.body.score,
    time: req.body.time,
  });

  await leaderboard.save();

  res.json({
    status: "Instance to the Leaderboard added",
  });
};

leaderboardCtrl.showBest = async (req, res) => {
  const leaderboard = await Leaderboard.find();
  const entries = Object.entries(leaderboard);
  const test2 = [];
  for (i = 0; i < leaderboard.length; i++) {
    const n = leaderboard[i];
    if (n.score == req.params.number) {
      test2.push(n);
    }
  }
  const test = leaderboard[0];
  console.log(test.score);
  const picked = leaderboard.find((o) => o.score == "69");

  test2.sort((a,b) => (a.time < b.time) ? 1 : ((b.time < a.time) ? -1 : 0)); 

  res.send(test2);
};

leaderboardCtrl.updateInstance = async (req, res) => {
  const leaderboard = {
    user_name: req.user_name,
    score: req.body.score,
    time: req.body.time,
  };

  await Leaderboard.findByIdAndUpdate(
    req.params.id,
    {
      $set: leaderboard,
    },
    { new: true }
  );

  res.json({
    status: "Leaderboard Updated",
  });
};

module.exports = leaderboardCtrl;
