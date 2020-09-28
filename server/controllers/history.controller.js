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

historyCtrl.updateEntry = async (req, res) => {
  const history = new History({
    level: req.body.level,
    score: req.body.score,
    time: req.body.time,
  });

  await History.findByIdAndUpdate(
    req.params.id,
    { $set: history },
    { new: true }
  );
  res.json({
    status: "Task Updated",
  });
};

module.exports = historyCtrl;
