import mongoose from 'mongoose';
var Schema = mongoose.Schema;

// create a schema
var categorySchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true
	}
});

export default mongoose.model('Category', categorySchema);