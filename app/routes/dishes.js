import Dish from '../models/dish';

import cloudinary from 'cloudinary'

cloudinary.config({
	cloud_name: 'dkr4ewoys',
	api_key: '883455887117763',
	api_secret: 'NcskWG1bwFalgi6Zrn-_4CUZBDc'
});

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
	Dish.find({}, (err, dish) => {
		if(err) {
			res.send(err);
		}
		res.json(dish);
	});
};

const getDish = (req, res) => {
	const { id } = req.params;
	Dish.findById(id, (err, dish) => {
		if(err) {
			res.send(err);
		}
		res.json(dish);
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
	const { id } = req.params;

	Dish.findById(id, (err, dish) => {
		if(err) {
			res.send(err);
			return;
		}
		if(!dish['srcImage']) {
			console.log('not found dishes');
			return;
		}
		var arr = dish['srcImage'].split('/'),
			publicId =  arr[arr.length - 1].split('.')[0];

		cloudinary.v2.uploader.destroy(publicId, function(err) {
			if(err) {
				console.log(err);
				return;
			}
			console.log('image removed from cloudinary');
			Dish.remove({ _id: req.params.id }, err => {
				if(err) {
					console.log(err);
				}
				res.json({message: 'successsfuly deleted'});
			})
		});
	});
};

const deleteAllDishes = (req, res) => {
	Dish.remove({}, err => {
		if(err) res.send(err);
		res.json({message: 'All dishes removed'});
	});
};

export {
	getDishesByCategory,
	getAllDishes,
	getDish,
	postDish,
	deleteDish,
	deleteAllDishes
};