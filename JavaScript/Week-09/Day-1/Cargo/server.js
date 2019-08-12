'use strict';

const express = require('express');
const app = express();
let cargo = {
  ".50": 0,
  ".30": 0,
  ".25": 0,
  shipstatus: "empty",
  ready: false
}
let max = 12500;

function curret(cargo, max) {
  let currentUse = Math.round(((cargo[".50"] + cargo[".25"] + cargo[".30"]) / max) * 100);
  currentUse === 100 ? cargo.shipstatus = 'full' : currentUse === 0 ? cargo.shipstatus = 'empty' : cargo.shipstatus = `${currentUse}%`;
}

function readyCheck(cargo, max) {
  let currentUse = cargo[".50"] + cargo[".25"] + cargo[".30"];
  currentUse === max ? cargo.ready = true : cargo.ready = false;
}

function remaining(cargo, max, data) {
  let currentUse = cargo[".50"] + cargo[".25"] + cargo[".30"];
  if (data.amount >= (max - currentUse)) { data.amount = (max - currentUse) }
  cargo[data.caliber] += parseInt(data.amount);
}

app.get('/rocket', (req, res) => {
  // TODO: implement this method
  res.status(200).send({
    "caliber25": cargo[".25"],
    "caliber30": cargo[".30"],
    "caliber50": cargo[".50"],
    "shipstatus": cargo.shipstatus,
    "ready": cargo.ready
  });
});

app.get('/rocket/fill', (req, res) => {
  let data = req.query;
  remaining(cargo, max, data)
  curret(cargo, max);
  readyCheck(cargo, max);
  res.send({
    "caliber25": cargo[".25"],
    "caliber30": cargo[".30"],
    "caliber50": cargo[".50"],
    "shipstatus": cargo.shipstatus,
    "ready": cargo.ready
  });
});

module.exports = app;