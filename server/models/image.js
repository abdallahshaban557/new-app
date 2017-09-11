const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
	caption:{
		type: String,
		required: true
	},
	url:{
		type: String,	
		required: true
	}
});

const Image = module.exports = mongoose.model('Image', imageSchema);