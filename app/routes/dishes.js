import Dish from '../models/dish';

const getDishes = (req, res) => {
	Dish.find(null, null, { sort: {postDate: 1}}, (err,dish) => {
		if(err) {
			res.send(err);
		}
		res.json(dish);
	});
};

// const getGame = (req, res) => {
// 	const { id } = req.params;
//
// 	Game.findById(id, (err, game) => {
// 		if(err) {
// 			res.send(err);
// 		}
// 		res.json(game);
// 	});
// }
//
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

// const postAllCategory = (req, res) => {
// 	fs.readFile(path.resolve('build/asset-manifest.json'), (err, data) => {
// 		if(err) res.send(err);
// 		res.send('added');
// 	});
// }

// const deleteCategory = (req, res) => {
// 	Category.remove({ _id: req.params.id }, err => {
// 		if(err) {
// 			res.send(err);
// 		}
// 		res.json({message: 'successsfuly deleted'});
// 	})
// };

const deleteAllDishes = (req, res) => {
	Dish.remove({}, err => {
		if(err) res.send(err);
		res.json({message: 'All dishes removed'});
	});
};

export {
	getDishes,
	postDish,
	// deleteCategory,
	deleteAllDishes
};