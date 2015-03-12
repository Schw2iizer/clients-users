var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var Schema = new Schema({
	name: {type: String, required: true, uniqueness: true},
	email: {type: String, required: true, uniquness: true, lowercase: true},
	addresses: [{
		address: {type: String, required: true, uppercase: true},
		city: {type: String, required: true, uppercase: true},
		state: {type: String, required: true, uppercase: true},
		zip: {type: String, required: true},
		kind: {type: String, enum: ["Billing", "Shipping", "Both"], default: "Both"}
	}],
	age: {type: Number, min: 13, max: 110}
});

module.exports = Mongoose.model("User", Schema);