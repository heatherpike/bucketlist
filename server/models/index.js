var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bucketlist');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

var itemSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: String,
	link: String,
	done: { type: String, default: null}
});

// var userSchema = new mongoose.Schema({
// 	name: String,
// 	email: String
// });

module.exports = mongoose.model('Item', itemSchema);