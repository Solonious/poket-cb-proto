import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';

export default class CommentEditor extends Component {
	static propTypes = {
		onChange: PropTypes.func
	};

	state = {
		value: RichTextEditor.createEmptyValue()
	};

	onChange = (value) => {
		this.setState({value});
		if (this.props.onChange) {
			this.props.onChange(
				value.toString('html')
			);
		}
	};

	render () {
		const toolbarConfig = {
			// Optionally specify the groups to display (displayed in the order listed).
			display: [
				'INLINE_STYLE_BUTTONS',
				'HISTORY_BUTTONS'
			],
			INLINE_STYLE_BUTTONS: [
				{label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
				{label: 'Italic', style: 'ITALIC'},
				{label: 'Underline', style: 'UNDERLINE'},
			]
		};
		return (
			<RichTextEditor
				value={this.state.value}
				onChange={this.onChange}
				toolbarConfig={toolbarConfig}
			/>
		);
	}
}