const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/topalove")

const User = require('../models/user');

/* GET signup page */
router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', (req, res, next) => {
  const nameInput = req.body.name;
  const emailInput = req.body.email;
  const passwordInput = req.body.password;

  const userSubmission = {
    name: nameInput,
    email: emailInput,
    password: passwordInput
  };

  const theUser = new User(userSubmission);
  theUser.save((err) => {
    if (err) {
    console.log(err);
  } else {
    console.log('meow');
    res.redirect('/');
  }

  });
});

module.exports = router;
