var mongoose = require('mongoose');

function BooksModel(){
	
}
var booksSchema = mongoose.Schema({
	name: {type:String},
	author: {type:String}
});

var BookObjModel = mongoose.model('books',booksSchema);

BooksModel.prototype.findAll = function(callback){
	console.log('at findall');
	BookObjModel.find({},function(err,data){
		callback(data);
	});
}
BooksModel.prototype.findbyName = function(name,callback){
	if(name){
		BookObjModel.find({name:name},function(err,data){
		if(err){
			callback(err);
		}else{
			callback(null,data);
		}
		});
	}
}

BooksModel.prototype.create=function(payload,callback){
	BookObjModel.findOne({firstname:payload.firstname},function(err,data){
			var model = UserObjModel(payload);
			model.save();
			callback(null,model);
		});
	}

BooksModel.prototype.update=function(payload, callback){
	BookObjModel.findOne({name:payload.name},function(err,data){
		var model = UserObjModel(payload);
		model.save();
		callback(null,model);
	});
}

BooksModel.prototype.delete = function(name,callback){
	UserObjModel.findOne({name:payload.name},function(err,data){
		if(!err){
			BookObjModel.remove({firstname:name},function(err,data){
			callback(data);
		})
		}
	});
}

BooksModel.prototype.search = function(query,callback){
	BookObjModel.remove({name:name},function(err,data){
		callback(data);
	});
}

module.exports =BooksModel;