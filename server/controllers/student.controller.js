const User = require("../models/User");
const Student = require("../models/Student");
const express = require("express");

const studentCtrl = {};

studentCtrl.getStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

studentCtrl.getStudents= async (req,res)=>{
  const student = await Student.findById(req.params.id).populate('history')
  res.json(student)
}

module.exports = studentCtrl;
