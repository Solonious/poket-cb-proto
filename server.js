import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';

// import dish from './app/models/dish';
// import { getDishes, getDish, postDish, deleteDish, updateDish } from './app/routes/dishes';
import { getCategory, postCategory, deleteCategory, deleteAllCategory, postAllCategory } from './app/routes/category';
import { getDishes, postDish } from './app/routes/dishes';
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

// app.use((req, res, next) => {
// 	res.send(req.param);
// });

app.use(express.static(__dirname + '/build'));

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE');
	res.header("Access-Control-Allow-Headers", "Origin, X-requested-Width, Content-Type, Accept");
	next();
});

app.route('/category').get(getCategory);

app.route('/category')
	.post(postCategory)
	.delete(deleteAllCategory)

app.route('/category/:id')
	.delete(deleteCategory)

app.route('/category/dishes')
	.get(getDishes);

app.route('/category/dish')
	.post(postDish);
// app.route('/post').get(postAllCategory);

// 	.get(getGames)
//
// app.route('/games/:id')
// 	.get(getGame)
// 	.delete(deleteGame);
//
// app.route("*").get((req, res) => {
// 	res.sendFile('client/dist/index.html', {root: __dirname});
// });

app.listen(port, () => {
	console.log(`Listenning on port ${port}`);
});