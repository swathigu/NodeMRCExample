var UsersModel = require('../models/UsersModel');
var winston = require('winston');

var uM = new UsersModel();

function UserController(){
	
}

UserController.prototype.findAll=function(req,res,next){
	uM.findAll(function(data){
		res.json(data);
	});
}

UserController.prototype.findbyName=function(req,res,next){
	var name = req.params.name;
	winston.info('Getting User Info ' +name);
	uM.findbyName(name,function(err,data){
		if(!err){
			res.json(data);
		}
	});
};
UserController.prototype.create=function(req,res,next){
	winston.info('Creating User Info');
	uM.create(req.body,function(err,data){
		res.json(data);
	});
}
UserController.prototype.update=function(req,res,next){
	winston.info('Updating User Info');
	uM.update(req.body,function(err,data){
	res.json(data);
	});
}

UserController.prototype.delete=function(req,res,next){
	var name = req.params.name;
	winston.info('Deleting User Info');
	uM.delete(name,function(err,data){
		if(!err){
			res.json(data);
		}
	});
}

UserController.prototype.search=function(req,res,next){
	//uM.findAll(function(data){
	//	res.json(data);
	//});
}

module.exports = UserController;