import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class SelectFieldCustom extends React.PureComponent {
	render() {
		const { items, handleChangeCategory, value } = this.props;
		return (
			<div>
				<SelectField
					value={value}
					floatingLabelText="Frequency"
					onChange={handleChangeCategory}
				>
					{items.map((item, i) => (
						<MenuItem
							key={i}
							value={i}
							primaryText={item} />
					))}
				</SelectField>
				<br />
			</div>
		)
	}
}

export default SelectFieldCustom;