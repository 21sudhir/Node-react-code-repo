const express = require('express');
const router = express.Router();

// This is a sample route which can be deleted
router.get('/user', function(req, res, next) {
  res.json({
    username: "User",
    email: "user@email.com"
  });
});

module.exports = router;