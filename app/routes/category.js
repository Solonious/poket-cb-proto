import Category from '../models/category';

const getCategories = (req, res) => {
	Category.find(null, null, { sort: {postDate: 1}}, (err,cat) => {
		if(err) {
			res.send(err);
		}
		res.json(cat);
	});
};

const postCategory = (req, res) => {
	let cat = Object.assign(new Category(), req.body);

	cat.save(err => {
		if(err) {
			res.send(err);
		}
		res.json({message: 'category created'});
	});
};

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
	getCategories,
	postCategory,
	deleteCategory,
	deleteAllCategory
};