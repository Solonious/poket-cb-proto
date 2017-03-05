import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { Link } from 'react-router';

import { dishFetchData } from '../helpers/helpers';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 400,
        height: 450,
        overflowY: 'auto',
    },
};

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
export default class Category extends React.Component {
  constructor() {
    super();
    this.state = {data: []};
  }

	componentDidMount() {
		dishFetchData().then(data => {
			console.log('data', data);
			this.setState({data: data});
		});
	}
	render() {
		return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
					{this.state.data.map((tile) => (
            <GridTile
              key={tile.id}
              title={tile.dishName}
              actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
            >
              <Link to="/category/:dishId"><img src={tile.srcImage} alt=""/></Link>
            </GridTile>
					))}
        </GridList>
      </div>
		);
	};
}