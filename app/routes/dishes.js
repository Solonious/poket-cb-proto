import Dish from '../models/dish';
import { TOKEN_SECRET } from '../../app.config';
import jwt from 'jsonwebtoken';

const getDishesByCategory = (req, res) => {
	const { catId } = req.params;
	Dish.find({category: catId}, (err, dish) => {
		if(err) {
			res.send(err);
		}
		res.json(dish);
	});
};

const getAllDishes = (req, res) => {
	let result;
	Dish.find({}, (err, dish) => {
		if(err) {
			res.send(err);
		}
		result = dish;
	})
		.populate('comments.postedBy')
		.exec((err, dish) => {
			if (err) throw err;
			if(!dish || !result) return;
			result.comments = dish.comments;
			res.json(result);
		});
};

const getDish = (req, res) => {
	let result;
	const { id } = req.params;
	Dish.findById(id, (err, dish) => {
		if(err) {
			res.send(err);
		}
		result = dish;
	})
		.populate('comments.postedBy')
		.exec((err, dish) => {
			if (err) throw err;
			result.comments = dish.comments;
			res.json(result);
		});
};

const postDish = (req, res) => {
	let dish = Object.assign(new Dish(), req.body);
	dish.save(err => {
		if(err) {
			res.send(err);
		}
		res.json({
			message: 'dish added',
		});
	});
};

const deleteDish = (req, res) => {
    Dish.remove({ _id: req.params.id }, err => {
        if(err) {
            res.send(err);
        }
        res.json({message: 'successsfuly deleted'});
    })
};

const deleteAllDishes = (req, res) => {
	Dish.remove({}, err => {
		if(err) res.send(err);
		res.json({message: 'All dishes removed'});
	});
};

const getComments = (req, res) => {
	const { id } = req.params;
	Dish.findById(id)
		.populate('comments.postedBy')
		.exec((err, dish) => {
			if (err) throw err;
			res.json(dish.comments);
		});
};

const postComment = (req, res) => {
		const { id } = req.params;
		Dish.findById(id, function (err, dish) {
			if (err) throw err;
			const token = req.headers['x-access-token'];

			if(!token) return;

			jwt.verify(token, TOKEN_SECRET, (err, payload) => {
				const { id } = payload;
				if(err) throw err;

				req.body.postedBy = id;
				dish.comments.push(req.body);
				dish.save((err, dish) => {
					if (err) throw err;
						console.log('Updated Comments!');
						res.json(dish);
				});
			});
		});
};

const deleteComments = (req, res) => {
	const { id } = req.params;
	Dish.findById(id, (err, dish) => {
		if (err) throw err;
		for (let i = (dish.comments.length - 1); i >= 0; i--) {
			dish.comments.id(dish.comments[i]._id).remove();
		}
		dish.save(function (err, result) {
			if (err) throw err;
			res.send(200, {
				'Content-Type': 'text/plain'
			});
			res.end('Deleted all comments!');
		});
	});
};

const getComment = (req, res) => {
	const { id, commentId } = req.params;
	Dish.findById(id)
		.populate('comments.postedBy')
		.exec(function (err, dish) {
			if (err) throw err;
			res.json(dish.comments.id(commentId));
		});
};

const updateComment = (req, res) => {
	const { id, commentId } = req.params;
	Dish.findById(id, (err, dish) => {
		if (err) throw err;
		dish.comments.id(commentId).remove();
		req.body.postedBy = req.decoded._doc._id;
		dish.comments.push(req.body);
		dish.save(function (err, dish) {
			if (err) throw err;
			console.log('Updated Comments!');
			res.json(dish);
		});
	});
};

const deleteComment = (req, res, next) => {
	const { id, commentId } = req.params;
	const token = req.headers['x-access-token'];
	if(!token) return;
	jwt.verify(token, TOKEN_SECRET, (err, payload) => {
		if(err) throw err;

		Dish.findById(id, (err, dish) => {
			if (dish.comments.id(commentId).postedBy
				!= payload.id) {
				var err = new Error('You are not authorized to perform this operation!');
				err.status = 403;
				return next(err);
			}
			dish.comments.id(commentId).remove();
			dish.save(function (err, resp) {
				if (err) throw err;
				console.log('Comment deleted!');
				res.json(resp);
			});
		});
	});
};

export {
	getDishesByCategory,
	getAllDishes,
	getDish,
	postDish,
	deleteDish,
	deleteAllDishes,
	getComments,
	postComment,
	deleteComments,
	getComment,
	updateComment,
	deleteComment,
};