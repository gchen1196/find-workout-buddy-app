const express = require('express');
const router = express.Router();
const User = require('../../database/models/user.js');

router.post('/user', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send();
  }
  catch (err){
    res.status(400).send(err);
  }
});

router.get('/user', async (req, res) => {
  try {
    const user = await User.find({})
    res.status(200).send(user);
  }
  catch (err){
    res.status(404).send(err);
  }
});

router.post('/user/login', async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({user, token});
  }
  catch (err) {
    res.status(400).send(err);
  }
})

module.exports = router;