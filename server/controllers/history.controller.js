const History = require("../models/History");
const express = require("express");

const historyCtrl = {};

historyCtrl.createHistoryEntry = async (req, res) => {
  const history = new History({
    user_id: req.body.user_id,
    level: req.body.level,
  });

  await history.save();
  res.json({
    status: "entry created",
  });
};

historyCtrl.getHistory = async (req, res) => {
  const history = await History.find();
  res.json(history);
};

module.exports = historyCtrl;
