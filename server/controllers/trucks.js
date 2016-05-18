var mongoose = require('mongoose');
var Truck = mongoose.model('Truck');


module.exports = {
	index: function(req, res){
		console.log('in index')
		Truck.find({}, function (err, trucks){
			console.log(req.params)
			res.json(trucks)
		}).sort('-updated')
	},
	create: function(req, res){
		console.log('sup')
		var truck = new Truck({
			name: req.params.name,
		})
		truck.save(function (err){
			if(err){
				console.log('somethings amiss');
				res.json(err)
			}else{
				console.log('successfuly added a truck');
				res.redirect('/')
			}
		})
	},
	manual: function(req,res){
		var truck = Truck({
			name: 'Chewaya Authentic Moroccan BBQ',
			desc: 'Authentic Moroccan sandwiches and BBQ',
			style: 'Moroccan',
			schedule: [{day: 'Monday', start: '11AM', end: '2PM', address: '11555 SE 8th St'}, {day: 'Tuesday', start: '11AM', end: '2PM', address: '3617 131st Ave SE'}]
		})
		truck.save(function (err){
			if(err){
				res.json(err)
			}else{
				res.redirect('/')
			}
		})
	},
	show: function(req,res){
		Task.find({truck:req.params.truck}, function (err,truck){
			console.log(req.params)
			res.json(truck)
		})
	}
}