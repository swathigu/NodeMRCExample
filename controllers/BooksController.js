var BooksModel = require('../models/BooksModel');

var bM = new BooksModel();

function BooksController(){
	
}

BooksController.prototype.findAll=function(req,res,next){
	bM.findAll(function(data){
		res.json(data);
	});
}

BooksController.prototype.findbyName=function(req,res,next){
	var name = req.params.name;
	bM.findbyName(name,function(err,data){
		if(!err){
			res.json(data);
		}else{
			res.send('Error getting ' + name);
		}
	});
};
BooksController.prototype.create=function(req,res,next){
	bM.create(req.body,function(err,data){
		res.json(data);
	});
}
BooksController.prototype.update=function(req,res,next){
	bM.update(req.body,function(err,data){
	res.json(data);
	});
}

BooksController.prototype.delete=function(req,res,next){
	var name = req.params.name;
	bM.delete(name,function(err,data){
		if(!err){
			res.json(data);
		}else{
			res.send('Error deleting');
		}
	});
}

BooksController.prototype.search=function(req,res,next){
	//uM.findAll(function(data){
	//	res.json(data);
	//});
}

module.exports = BooksController;