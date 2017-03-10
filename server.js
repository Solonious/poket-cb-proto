import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { getCategories, postCategory, deleteCategory, deleteAllCategory } from './app/routes/category';
import { getDishByCategory, getAllDishes, postDish, getDish, deleteDish, deleteAllDishes } from './app/routes/dishes';
const app = express();
const port = process.env.PORT || 8080;

const options = {
	server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
	replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/poket-cb-proto', options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/build'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-Width, Content-Type, Accept");
	next();
});

app.route('/category')
	.get(getCategories) //checked
	.post(postCategory)
	.delete(deleteAllCategory);

app.route('/category/:id') //checked
	.delete(deleteCategory); //checked

app.route('/dishes')
	.get(getAllDishes);

app.route('/:catId/dishes')
	.get(getDishByCategory)
	.post(postDish)
	.delete(deleteAllDishes);

app.route('/dishes/:id')
	.get(getDish) //checked
	.delete(deleteDish); //checked

app.route("*").get((req, res) => {
	res.sendFile('build/', {root: __dirname});
});

app.listen(port, () => {
	console.log(`Listenning on port ${port}`);
});