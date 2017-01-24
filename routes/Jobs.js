var express = require('express'),
router = express.Router();
var JobsModel = require('../models/JobsModel');
var winston = require('winston');

var jM = new JobsModel();

router.get("/",function(req,res){
	res.json({
		message:"Welcome to Jobs Page"
	});
});
router.get("/:jobName",function(req,res){
	var jobName = req.params.jobName;
	winston.info('Getting Job Info ' +jobName);
	jM.findbyName(jobName,function(data){
		res.json(data);
	})
});

router.post("/",function(req,res,next){
	winston.info('Posting Job Info');
	
});

router.put("/",function(req,res,next){
	winston.info('Putting Job Info');
	
});

router.delete("/",function(req,res,next){
	winston.info('Deleting Job Info');
	
});
router.search("/",function(req,res,next){
	winston.info('Deleting Job Info');
	
});
module.exports=router;