import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { hashHistory } from 'react-router';
import { CategoryAddForm } from '../components';

import * as categoriesActionCreators from '../actions/categories';

class AddCategoryContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this)
	}

	submit(event) {
		event.preventDefault();
		this.props.categoriesActions.postCategory();
        this.props.categoriesActions.getCategories();
		hashHistory.push('/admin/category');
	}

	render() {
		return (
			<CategoryAddForm
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
        categoriesActions: bindActionCreators(categoriesActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryContainer);