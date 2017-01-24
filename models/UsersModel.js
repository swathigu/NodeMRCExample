var mongoose = require('mongoose');

function UsersModel(){
	

}
var userSchema = mongoose.Schema({
	firstname : {type:String},
	lastname: {type:String},
	email: {type:String},
	phone: {type:String},
	active:{type:Boolean},
	sub_list:{type:Array}
});

var UserObjModel = mongoose.model('users',userSchema);

UsersModel.prototype.findAll = function(callback){
	UserObjModel.find({},function(err,data){
		callback(data);
	});
}
UsersModel.prototype.findbyName = function(name,callback){
	if(name){
		UserObjModel.find({firstname:name},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
		});
	}
}

UsersModel.prototype.create=function(payload,callback){
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
			var model = UserObjModel(payload);
			model.save();
			callback(null,model);
		});
	}

UsersModel.prototype.update=function(payload, callback){
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
		var model = UserObjModel(payload);
		model.save();
		callback(null,model);
	});
}

UsersModel.prototype.delete = function(name,callback){
	UserObjModel.findOne({firstname:payload.firstname},function(err,data){
		if(!err){
			UserObjModel.remove({firstname:name},function(err,data){
			callback(data);
		})
		}
	});
}

UsersModel.prototype.search = function(query,callback){
	UserObjModel.remove({firstname:name},function(err,data){
		callback(data);
	});
}



module.exports =UsersModel;