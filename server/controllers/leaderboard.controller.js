const Leaderboard = require("../models/Leaderboard");
const express = require("express");
const leaderboardCtrl = {};

leaderboardCtrl.getAll = async (req, res) => {
  const leaderboard = await Leaderboard.find();
  res.json(leaderboard);
};

leaderboardCtrl.createInstance = async (req, res) => {
  const leaderboard = new Leaderboard({
    user_name: req.body.user_name,
    score: req.body.score,
    time: req.body.time,
  });

  await leaderboard.save();

  res.json({
    status: "Instance to the Leaderboard added",
  });
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

module.exports = leaderboardCtrl