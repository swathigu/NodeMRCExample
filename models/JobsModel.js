var mongoose = require('mongoose');

function JobssModel(){
	
}
var jobsSchema = mongoose.Schema({
	firstname : {type:String},
	lastname: {type:String},
	email: {type:String},
	phone: {type:String},
	active:{type:Boolean},
	sub_list:{type:Array}
});

var JobsObjModel = mongoose.model('jobs',jobsSchema);

JobsModel.prototype.findAll = function(callback){
	JobsObjModel.find({},function(err,data){
		callback(data);
	})
}
JobsModel.prototype.findbyName = function(jobName,callback){
	JobsObjModel.find({job_name:jobName},function(err,data){
		callback(data);
	})
}


module.exports =JobsModel;