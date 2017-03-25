import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DishAddForm } from '../components';
import { hashHistory } from 'react-router';

import * as dishesActionCreators from '../actions/dishes';
import * as filestackActionCreators from '../actions/filestack';

class AddDishContainer extends React.Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.uploadPicture = this.uploadPicture.bind(this);
		this.removePicture = this.removePicture.bind(this);
	}
	submit(event) {
		event.preventDefault();
		this.props.dishesActions.postDish();
		this.props.dishesActions.getDishes();
		hashHistory.push('/admin/dishes');
	}
	uploadPicture() {
		this.props.filestackActions.uploadPicture();
	}
	removePicture() {
		this.props.filestackActions.removePicture();
	}
	render() {
		const { categories, srcImage } = this.props;
		return (
			<DishAddForm
				categories={categories}
				picture={srcImage}
				handleSubmit={this.submit}
				uploadPicture={this.uploadPicture}
			  removePicture={this.removePicture}
			/>
		);
	}
}

function mapStateToProps (state) {
	return {
	    srcImage: state.getIn(['filestack', 'url'], '')
    }
}

function mapDispatchToProps (dispatch) {
	return {
		dishesActions: bindActionCreators(dishesActionCreators, dispatch),
        filestackActions: bindActionCreators(filestackActionCreators, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDishContainer);