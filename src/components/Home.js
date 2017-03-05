import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Link } from 'react-router';

import { categoryFetchData } from '../helpers/helpers';

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

class Home extends React.Component {
	constructor() {
		super();
		this.state = {data:[]}
	}
	componentDidMount() {
		categoryFetchData().then(data => {
			this.setState({data: data});
		});
	}

	render() {
		return (
			<div style={styles.root}>
				<GridList
					cellHeight={100}
					style={styles.gridList}
				>
					 {this.state.data.map((tile) => (
						<Link to="/category" className="btn-home" style={styles.btn} key={tile.id}>
							<img src={tile.src} style={styles.img} alt=""/>
							<h3 style={styles.root}>{tile.name}</h3>
						</Link>
					))}
				</GridList>
			</div>
		);
	}
}

export default Home;