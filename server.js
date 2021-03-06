import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

import { appConf, dbConf } from './app.config';

import { getCategories, postCategory, deleteCategory, deleteAllCategory } from './app/routes/category';
import {
	getDishesByCategory,
	getAllDishes,
	postDish,
	getDish,
	deleteDish,
	deleteAllDishes,
	getComments,
	deleteComments,
	postComment,
	getComment,
	updateComment,
	deleteComment,
} from './app/routes/dishes';

import { signup, login, verifyAuth, getUsers, verifyAdminAuth, deleteAllUsers } from './app/routes/user';

const app = express();
const port = process.env.PORT || appConf.port;

const options = {
	server: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}},
	replset: {socketOptions: {keepAlive: 1, connectTimeoutMS: 30000}}
};

// mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${dbConf.host}/poket-cb-proto`, options);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/build'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-Width, Content-Type, Accept, x-access-token");
	next();
});

app.post('/login', login);      // /login for authorization
app.post('/signup', signup);    // /signup for registration

app.route('/users')
	.get(
		// verifyAuth,
		// verifyAdminAuth,
		getUsers)
	.delete(deleteAllUsers);               // get all users

app.route('/category')
	.get(getCategories)
	.post(verifyAuth, verifyAdminAuth, postCategory)
	.delete(verifyAuth, verifyAdminAuth, deleteAllCategory);

app.route('/category/:id')
	.delete(verifyAuth, verifyAdminAuth, deleteCategory);

app.route('/dishes')
	.get(getAllDishes);

app.route('/dishes')
	.get(getDishesByCategory)
	.post(verifyAuth, verifyAdminAuth, postDish)
	.delete(verifyAuth, verifyAdminAuth, deleteAllDishes);

app.route('/dishes/:id/comments')
	.get(getComments)
	.post(verifyAuth, postComment)
	.delete(verifyAuth, deleteComments);

app.route('/dishes/:id/comments/:commentId')
	.get(getComment)
	.put(updateComment)
	.delete(deleteComment);
// adminka
app.route('/dishes/:id')
	.get(getDish)
	.delete(verifyAdminAuth, deleteDish);

app.route('/:catId/dishes/:id')
	.get(verifyAdminAuth, getDish);

app.route("*").get((req, res) => {
	res.sendFile('build/index.html', { root: __dirname });
});

app.listen(port, () => {
	console.log(`Listenning on port ${port}`);
});