import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: 500,
		height: 450,
		overflowY: 'auto',
	},
};

const tilesData = [
	{
		img: 'http://shirleybandb-bournemouth.com/wp-content/uploads/2016/06/breakfast-icon4.jpg',
		title: 'Breakfast',
		author: 'jill111',
	},
	{
		img: 'http://images.bigoven.com/image/upload/t_recipe-256/cheesy-hash-brown-skillet-dinner.jpg',
		title: 'Dinner',
		author: 'pashminu',
	},
	{
		img: 'https://is4-ssl.mzstatic.com/image/thumb/Purple122/v4/96/3d/43/963d43de-0af1-1438-3438-f92a88833c65/source/256x256bb.jpg',
		title: 'Dessert',
		author: 'Danson67',
	},
	{
		img: 'http://lepeshka-cafe.ru/media/upload/c4bd6cdf-1baa-4590-8c23-e36623f03283.png',
		title: 'lunch',
		author: 'fancycrave1',
	},
	{
		img: 'http://images.bigoven.com/image/upload/t_recipe-256/main-chilis-peppercorn-burger.jpg',
		title: 'Burgers',
		author: 'Hans',
	},
	{
		img: 'http://i2.wp.com/eatosi.com/wp-content/uploads/2016/10/Cocktail-Week-1.png?resize=256%2C256',
		title: 'Drinks',
		author: 'fancycravel',
	},
];

const Home = () => (
	<div style={styles.root}>
		<GridList
			cellHeight={180}
			style={styles.gridList}
		>
			{tilesData.map((tile) => (
				<GridTile
					key={tile.img}
					title={tile.title}
					subtitle={<span>by <b>{tile.author}</b></span>}
					actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
				>
					<img src={tile.img} alt=""/>
				</GridTile>
			))}
		</GridList>
	</div>
);

export default Home;