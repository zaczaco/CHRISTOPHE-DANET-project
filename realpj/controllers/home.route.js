// controllers/hello.route.js
const express = require('express');
const router = express.Router();

// http://localhost:9000/hello
router.get('/', (req, res) => res.render('home_view'));

module.exports = router;