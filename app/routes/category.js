import Category from '../models/category';
// import path from 'path';
// import fs from 'fs';

const getCategory = (req, res) => {
	// let Category = req.path.substring(1);
	Category.find(null, null, { sort: {postDate: 1}}, (err,cat) => {
		if(err) {
			res.send(err);
		}
		res.json(cat);
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
const postCategory = (req, res) => {
	let cat = Object.assign(new Category(), req.body);

	cat.save(err => {
		if(err) {
			res.send(err);
		}
		res.json({message: 'category created'});
	});
};

// const postAllCategory = (req, res) => {
// 	fs.readFile(path.resolve('build/asset-manifest.json'), (err, data) => {
// 		if(err) res.send(err);
// 		res.send('added');
// 	});
// }

const deleteCategory = (req, res) => {
	Category.remove({ _id: req.params.id }, err => {
		if(err) {
			res.send(err);
		}
		res.json({message: 'successsfuly deleted'});
	})
};

const deleteAllCategory = (req, res) => {
	Category.remove({}, err => {
		if(err) res.send(err);
		res.json({message: 'All categories removed'});
	});
};

export {
	getCategory,
	postCategory,
	deleteCategory,
	deleteAllCategory
};