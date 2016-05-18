var mongoose = require('mongoose');

var TruckSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	desc: {
		type: String
	},
	style: {
		type: String
	},
	schedule: [{
		day: String,
		start: String,
		end: String,
		address: String
	}]
})

var Truck = mongoose.model('Truck', TruckSchema);
