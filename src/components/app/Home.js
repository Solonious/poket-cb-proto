import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Link } from 'react-router';

import CircularProgress from './CircularProgress';

import 'react-redux-toastr/src/styles/index.scss';
import styles from '../styles';

class Home extends React.PureComponent {
	render() {
		const { categories } = this.props;
		return categories.length ? (
			<div style={styles.rootCategory}>
				<GridList
					cellHeight={'auto'}
					style={styles.adminlist}
				>
					 {categories.map((tile) => (
						<Link
							to={`/${tile.name}/dishes`}
							className="btn-home"
							style={styles.pictureBtn}
							key={tile._id}
						>
							<img src={tile.picture} style={styles.picture} alt=""/>
							<h3 style={styles.pictureTitle}>{tile.name}</h3>
						</Link>
					))}
				</GridList>
			</div>
		) : <CircularProgress/>;
	}
}

export default Home;