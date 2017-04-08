import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { CategoryAddForm } from '../components';

import * as categoriesActionCreators from '../actions/categories';
import * as filestackActionCreators from '../actions/filestack';

class AddCategoryContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.uploadPicture = this.uploadPicture.bind(this);
		this.removePicture = this.removePicture.bind(this);
	}

	submit(event) {
		event.preventDefault();
		this.props.categoriesActions.postCategory();
		this.props.categoriesActions.getCategories();
		hashHistory.push('/admin/category');
	}

	uploadPicture() {
		this.props.filestackActions.uploadPicture();
	}
	removePicture() {
		this.props.filestackActions.removePicture();
	}

	render() {
		const { src } = this.props;
		return (
			<CategoryAddForm
				picture={src}
				handleSubmit={this.submit}
				uploadPicture={this.uploadPicture}
				removePicture={this.removePicture}
			/>
		);
	}
}

function mapStateToProps (state) {
    return {
		src: state.getIn(['filestack', 'url'], '')
	}
}

function mapDispatchToProps (dispatch) {
    return {
	    categoriesActions: bindActionCreators(categoriesActionCreators, dispatch),
	    filestackActions: bindActionCreators(filestackActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer);