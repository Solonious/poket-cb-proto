import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DishAddForm } from '../components';
import { hashHistory } from 'react-router';

import * as dishesActionCreators from '../actions/dishes';

import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'jfdnt3qv';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/pocket-cb-proto/upload';


class AddDishContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this)
	}
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         src: '',
    //         category: {
	 //            index: '',
	 //            value: ''
    //         },
    //         description: '',
    //         categories: [],
    //         uploadedFile: null,
    //         uploadedFileCloudinaryUrl: ''
    //     };
    //     this.getCategoryData = this.getCategoryData.bind(this);
    //     this.handleChangeName = this.handleChangeName.bind(this);
    //     this.handleChangeCategory = this.handleChangeCategory.bind(this);
    //     this.handleChangeDescription = this.handleChangeDescription.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    //     this.formClear = this.formClear.bind(this);
    //     this.onImageDrop = this.onImageDrop.bind(this);
    //
    // }
    // componentDidMount() {
    //     this.getCategoryData();
    // }
    //
    // handleChangeName(event) {
    //     this.setState({
    //         name: event.target.value
    //     });
    // }
    // handleChangeCategory (event, index, value) {
		// const { categories } = this.state;
		// this.setState({
		// 	category: {
    //     value: categories[index],
    //     index
    //   }
		// });
    // }
    //
    // handleChangeDescription(event) {
    //     this.setState({
    //         description: event.target.value
    //     });
    // }
    // handleSubmit() {
    //     const data = {
    //         dishName: this.state.name,
    //         srcImage: this.state.src,
    //         category: this.state.category.value,
    //         description: this.state.description,
    //     };
    //     fetch('http://localhost:8080/category/dishes', {
    //         headers: new Headers({
    //             'Content-Type': 'application/json'
    //         }),
    //         method: 'POST',
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data.message);
    //             this.formClear();
    //             hashHistory.push('/admin/dishes');
    //         });
    // }
    // formClear() {
    //     this.setState({
    //         name: '',
    //         src: '',
    //         category: {
	 //            index: 0,
	 //            value: '',
    //         },
    //         description: ''
    //     })
    //
    // }
    // getCategoryData() {
	 //      categoryFetchData().then(category => {
		//         this.setState({
		// 	          categories: category.map((item) => {
		// 		          return item['name']
		// 	          })
		//         });
	 //      });
    // }
    // onImageDrop(files) {
    //     this.setState({
    //         uploadedFile: files[0]
    //     });
    //
    //     this.handleImageUpload(files[0]);
    // }
    // handleImageUpload(file) {
    //     let upload = request.post(CLOUDINARY_UPLOAD_URL)
    //         .field('api_key', '883455887117763')
    //         .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
    //         .field('file', file);
    //
    //     upload.end((err, response) => {
    //         if (err) {
    //             console.error(err);
    //         }
    //
    //         if (response.body.secure_url !== '') {
    //             this.setState({
    //                 uploadedFileCloudinaryUrl: response.body.secure_url,
    //                 src: response.body.secure_url,
    //             });
    //         }
    //     });
    // }
    submit(event) {
        event.preventDefault();
        this.props.dishesActions.postDish();
        // this.props.dishesActions.getDishes();
        hashHistory.push('/admin/dishes');
    }

    render() {
        const { categories } = this.props;
        return (
            <DishAddForm
                categories={categories}
                handleSubmit={this.submit}
            />
        );
    }
}

function mapStateToProps (state) {
	return {...state};
}

function mapDispatchToProps (dispatch) {
	return {
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDishContainer);