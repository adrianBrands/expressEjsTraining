var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render("index", { text: "This small project using Tailwind with Express and Ejs", title: "Express, Ejs, Tailwind" });
});

module.exports = router;
