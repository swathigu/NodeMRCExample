var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');
var uc = new UserController();

router.get("/", uc.findAll.bind(uc));
router.get("/:name", uc.findbyName.bind(uc));
router.post("/", uc.create.bind(uc));
router.put("/", uc.update.bind(uc));
router.delete("/:name", uc.delete.bind(uc));
router.search("/", uc.search.bind(uc));


/*router.get("/",function(req,res){
	winston.info('Getting User Info');
	uM.findAll(function(data){
		res.json(data);
	})
});

router.get("/:name",function(req,res){
	var name = req.params.name;
	winston.info('Getting User Info ' +name);
	uM.findbyName(name,function(err,data){
		if(!err){
			res.json(data);
		}
	})
});

router.post("/",function(req,res,next){
	winston.info('Creating User Info');
	uM.create(req.body,function(err,data){
		//res.json(data);
	});
});

router.put("/",function(req,res,next){
	winston.info('Updating User Info');
	uM.update(req.body,function(err,data){
		//res.json(data);
	});
	
});

router.delete("/:name",function(req,res,next){
	var name = req.params.name;
	winston.info('Deleting User Info');
	uM.delete(name,function(err,data){
		if(!err){
			res.json(data);
		}
	})
	
});
router.search("/",function(req,res,next){
	winston.info('Deleting User Info');
	
});*/


module.exports=router;