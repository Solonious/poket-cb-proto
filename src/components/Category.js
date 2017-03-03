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

const tilesData = [
    {
        img: 'https://static.wixstatic.com/media/4947de_401c94663a794832aef3063f37bd175c~mv2_d_2048_2048_s_2.jpg_256',
        title: 'Breakfast',
    },
    {
        img: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/roasted-turkey-breast-efe0bf.jpg',
        title: 'Tasty burger',
    },
    {
        img: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/thanksgiving-turkey-2.jpg',
        title: 'Camera',
    },
    {
        img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTb1I8aIyj-SVbn2d4KV3OWAHaLdOYRv_RhabPKd4vDTYRIqyLokw',
        title: 'Morning',
    },
    {
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRIVseBXY-9MdMyzoxEOXTSjDu0syZ3HzeJT4lrvZU4BNpEcjk_lQ',
        title: 'Hats',
    },
    {
        img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRie_QDrRzRdIU80KX4yRjcVRt-KznOXp2sAMHLeKlDZyN0f_anww',
        title: 'Honey',
    },
    {
        img: 'http://i8tonite.com/wp-content/uploads/2015/07/passport-magazine-world-eats-palm-springs-tropicale-and-the-copa-room-256x256.jpg',
        title: 'Vegetables',
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoYsPWR8HuH2PMPYVvDBet8JWowrzbiXYSDJDr_vX1OMgo8E4',
        title: 'Water plant',
    },
];

/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
const Category = () => {
     return (
         <div style={styles.root}>
             <GridList
                 cellHeight={180}
                 style={styles.gridList}
             >
                 {tilesData.map((tile) => (
                     <GridTile
                         key={tile.img}
                         title={tile.title}
                         actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                     >
                         <Link to="/category/:dishId"><img src={tile.img} alt=""/></Link>
                     </GridTile>
                 ))}
             </GridList>
         </div>
     );
 };

export default Category;