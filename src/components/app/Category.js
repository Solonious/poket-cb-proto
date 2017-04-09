import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

import { Link } from 'react-router';

import styles from '../styles';

class Category extends React.PureComponent {
	render() {
		const { catId } = this.props.params;
  	const { dishes } = this.props;
  	const currentCategoryDishes = dishes.filter((dish)=>{
  		return dish.category === catId;
	  });
		return (
      <div style={styles.rootCategory}>
        <GridList
          cellHeight={180}
          style={styles.adminlist}
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