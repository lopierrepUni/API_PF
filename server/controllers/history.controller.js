const History = require("../models/History");
const express = require("express");

const historyCtrl = {};

historyCtrl.createHistoryEntry = async (req, res) => {
  const history = new History({
    user_id: req.body.user_id,
    level: req.body.level,
    score: req.body.score,
    time: req.body.time,
  });

  await history.save();
  res.send(history._id);
};

historyCtrl.getHistory = async (req, res) => {
  const history = await History.find();
  res.json(history);
};

module.exports = historyCtrl;
