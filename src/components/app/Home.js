import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Link } from 'react-router';

// import * as svgIcon from '../../img/index';

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
	title: {
		lineHeight: 0.1
	}
};

class Home extends React.PureComponent {
	render() {
		const { categories } = this.props;
		return (
			<div style={styles.root}>
				<GridList
					cellHeight={'auto'}
					style={styles.gridList}
				>
					 {categories.map((tile) => (
						<Link
							to={`/${tile.name}/dishes`}
							className="btn-home"
							style={styles.btn}
							key={tile._id}
						>
							<img src={tile.src} style={styles.img} alt=""/>
							<h3 style={styles.title}>{tile.name}</h3>
						</Link>
					))}
				</GridList>
			</div>
		);
	}
}

export default Home;