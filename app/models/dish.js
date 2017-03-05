import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var commentSchema = new Schema({
	rating:  {
		type: Number,
		min: 1,
		max: 5,
		required: true
	},
	comment:  {
		type: String,
		required: true
	},
	postedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, {
	timestamps: true
});

// create a schema
var dishesSchema = new Schema({
	dishName: {
		type: String,
		required: true,
	},
	srcImage: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	likes: {
		type: Number,
		default: 0,
	},
	comments:[commentSchema]
}, {
	timestamps: true
});

export default mongoose.model('Dish', dishesSchema);