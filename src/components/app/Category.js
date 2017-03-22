import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { Link } from 'react-router';

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

class Category extends React.PureComponent {
	render() {
		const { catId } = this.props.params;
  	const { dishes } = this.props;
  	const currentCategoryDishes = dishes.filter((dish)=>{
  		return dish.category === catId;
	  });
		return (
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
            {currentCategoryDishes.map((tile) => (
                <Link
                    to={`/${catId}/${tile._id}`}
                    key={tile._id}
                >
                    <GridTile
                        key={tile._id}
                        title={tile.dishName}
                        actionIcon={<IconButton><StarBorder color="white"/></IconButton>}
                    >
	                    <img src={tile.srcImage} alt=""/>
                    </GridTile>
                </Link>
            ))}
        </GridList>
      </div>
        );
	};
}

export default Category;