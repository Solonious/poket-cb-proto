import jwt from 'jsonwebtoken';
import moment from 'moment';
import User from '../models/user';
import { TOKEN_SECRET } from '../../app.config';

const createToken = (name, admin, id) => {
	let payload = {
		sub: name,
		exp: moment().add(1, 'day').unix(),
		adm: admin,
		id
	};
	return jwt.sign(payload, TOKEN_SECRET);
};

const signup = (req, res) => {
	User.findOne({ email: req.body.email }, (err, existingUser) => {
		if (existingUser) {
			return res.status(409).json({ message: 'Email is already taken' });
		}

		const user = Object.assign(new User(), req.body);
		user.save((err, result) => {
			const { name, admin, _id } = result;
			if (err) {
				res.send(err);
			}
			res.json({
				message: `Welcome to Poket Cook Book, you are now logged in ${result.name} ${result.admin}`,
				token: createToken(name, admin, _id)
			});
		});
	});
};

const login = (req, res) => {
	User.findOne({ email: req.body.email }, '+password', (err, user) => {
		const { name, admin, _id } = user;
		if (!user) {
			return res.status(401).json({ message: 'Invalid email/password' });
		}
		user.comparePwd(req.body.password, (err, isMatch) => {
			if (!isMatch) {
				return res.status(401).send({ message: 'Invalid email/password' });
			}
			res.json({ message: 'You are now logged in', token: createToken(name, admin, _id) });
		});
	});
};

const verifyAuth = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, TOKEN_SECRET, (err, payload) => {
			if (err) {
				return res.status(401).send({
					message: 'Failed to authenticate token.'
				});
			} else {
				req.payload = payload;
				next();
			}
		});
	} else {
		return res.status(403).send({
			message: 'No token provided.'
		});
	}
};

const verifyAdminAuth = (req, res, next) => {
	const token = req.headers['x-access-token'];
	if (token) {
		jwt.verify(token, TOKEN_SECRET, (err, payload) => {
			if(err) {
				return res.status(401).send({
					message: 'Failed authenticate Admin'
				});
			}
			if(!payload.adm) {
				return res.status(404).send({
					message: 'No admin feature!!!'
				});
			}
			if (payload.adm) {
				next();
			}
		});
	} else {
		return res.status(403).send({
			message: 'No token provider'
		});
	}
};

const getUsers = (req, res, next) => {
	User.find({}, (err, user) => {
		if(err) {
			res.send(err);
		}
		res.json(user);
	});
};

const deleteAllUsers = (req, res, next) => {
	User.remove({}, err => {
		if(err) {
			res.status(500).send(err);
		}
		res.json({
			message: 'All users deleted!!!'
		});
	});
};

export {
	signup,
	login,
	verifyAuth,
	verifyAdminAuth,
	getUsers,
	deleteAllUsers,
};