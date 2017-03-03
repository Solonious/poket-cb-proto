import React from 'react';
import {GridList } from 'material-ui/GridList';
import { Link } from 'react-router';
import * as svgIcon from '../img/index';

const styles = {
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		fontFamily: 'Glamour',
	},
	gridList: {
		width: 400,
		height: 450,
		overflowY: 'auto',
	},
	btn: {
		border: 'none',
		background: 'transparent',
		cursor: 'pointer'
	},
	img: {
		width: '50%'
	},
};

const tilesData = [
	{
		id: 0,
		img: svgIcon.salad,
		title: 'Breakfast',
		author: 'jill111',
	},
	{
		id: 1,
		img: svgIcon.tempura,
		title: 'Dinner',
		author: 'pashminu',
	},
	{
		id: 2,
		img: svgIcon.porridge,
		title: 'Dessert',
		author: 'Danson67',
	},
	{
		id: 3,
		img: svgIcon.hotDrink,
		title: 'lunch',
		author: 'fancycrave1',
	},
	{
		id: 4,
		img: svgIcon.spaguetti,
		title: 'Burgers',
		author: 'Hans',
	},
	{
		id: 5,
		img: svgIcon.food,
		title: 'Drinks',
		author: 'fancycravel',
	},
];

const Home = () => (
	<div style={styles.root}>
		<GridList
			cellHeight={100}
			style={styles.gridList}
		>
			{tilesData.map((tile) => (
					<Link to="/category" className="btn-home" style={styles.btn} key={tile.id}>
						<img src={tile.img} style={styles.img} alt=""/>
						<h3 style={styles.root}>{tile.title}</h3>
					</Link>
			))}
		</GridList>
	</div>
);

export default Home;