var mongoose = require('mongoose');
var Truck = mongoose.model('Truck');

var trucks = require('../controllers/trucks.js')


module.exports = function(app){
	app.get('/', function (req, res){
		trucks.index(req,res);
	});
	app.get('/new/:name', function (req, res){
		trucks.create(req,res);
	})
	app.get('/manual', function (req, res){
		trucks.manual(req,res);
	})

}