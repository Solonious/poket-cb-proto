import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
	email: { type: String, unique: true, lowercase: true },
	password: { type: String, select: false },
	name: String
});

userSchema.pre('save', function (next) {
	let user = this;
	bcrypt.genSalt(10, function (err, salt) {
		bcrypt.hash(user.password, salt, function (err, hash) {
			user.password = hash;
			next();
		});
	});
});

userSchema.methods.comparePwd = function(password, done) {
	bcrypt.compare(password, this.password, (err, isMatch) => {
		done(err, isMatch);
	});
};

export default mongoose.model('User', userSchema);