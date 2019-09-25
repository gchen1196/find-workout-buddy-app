const Session = require('../../database/models/session.js');
const express = require('express');
const router = express.Router();

router.post('/session', async (req, res) => {
  try {
    const session = new Session(req.body);
    await session.save();
    res.status(201).send();
  }
  catch (err) {
    res.status(400).send(err)
  }
})

router.get('/session', async (req, res) => {
  try {
    const result = await Session.find({});
    res.status(200).send(result);
  }
  catch (err) {
    res.status(400).send(err);
  }
})

module.exports = router;