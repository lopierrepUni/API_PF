const History = require("../models/History");
const Student = require("../models/Student");
const express = require("express");

const historyCtrl = {};

historyCtrl.createHistoryEntry = async (req, res) => {
  const history = new History({
    user_id: req.params.id,
    level: req.body.level,
    score: req.body.score,
    time: req.body.time,
  });

  await history.save();
  await Student.findByIdAndUpdate(
    req.params.id,
    { $push: { history: history } },
    { new: true, useFindAndModify: false }
  );

  await Student.findById(req.params.id).populate("history");
  res.send(history._id);
};

historyCtrl.getHistory = async (req, res) => {
  const history = await History.find();
  res.json(history);
};

historyCtrl.updateEntry = async (req, res) => {
  const history = {
    score: req.body.score,
    time: req.body.time,
  };

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
