const express = require('express');
const router = express.Router();

/* GET versus page */
router.get('/profile', (req, res, next) => {
  res.render('profile');
});

module.exports = router;
