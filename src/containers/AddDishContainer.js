import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DishAddForm } from '../components';
import { hashHistory } from 'react-router';

import * as dishesActionCreators from '../actions/dishes';
import * as filestackActionCreators from '../actions/filestack';

// import request from 'superagent';

// const CLOUDINARY_UPLOAD_PRESET = 'jfdnt3qv';
// const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/pocket-cb-proto/upload';


class AddDishContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.uploadPicture = this.uploadPicture.bind(this);
	}
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
        this.props.dishesActions.getDishes();
        hashHistory.push('/admin/dishes');
    }
    uploadPicture () {
        this.props.filestackActions.uploadPicture();
    }

    render() {
	    console.log(this.props);
        const { categories, picture } = this.props;
        return (
            <DishAddForm
                categories={categories}
                picture={picture}
                handleSubmit={this.submit}
                uploadPicture={this.uploadPicture}
            />
        );
    }
}

function mapStateToProps (state) {
	return {
	    picture: state.getIn(['filestack', 'url'], '')
    }
}

function mapDispatchToProps (dispatch) {
	return {
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
        filestackActions: bindActionCreators(filestackActionCreators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDishContainer);