var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next){
	res.json({
		message: "Welcome to Notification Engine"
	});
});

router.use('/users', require("./Users.js"));
router.use('/books', require("./books.js"));
//router.use('/jobs', require("./Jobs.js"));

module.exports = router;
