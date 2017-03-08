import React from 'react';
import EditorModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import ActionDeleteForever from 'material-ui/svg-icons/action/delete-forever';
import { red500, green500, greenA200, red200 } from 'material-ui/styles/colors';

import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const IconBtnEdit = (
	<IconButton>
		<EditorModeEdit
			color={green500}
			hoverColor={greenA200}
		/>
	</IconButton>
);

const IconBtnDelete = (
	<IconButton>
		<ActionDeleteForever
			color={red500}
			hoverColor={red200}
		/>
	</IconButton>
);

const iconButtonElement = (
	<IconButton
		touch={true}
		tooltip="more"
		tooltipPosition="top-left"
	>
		<MoreVertIcon />
	</IconButton>
);

const rightIconMenu = (
	<IconMenu iconButtonElement={iconButtonElement}>
		<MenuItem>{IconBtnEdit}</MenuItem>
		<MenuItem>{IconBtnDelete}</MenuItem>
	</IconMenu>
);

export { IconBtnEdit, IconBtnDelete, rightIconMenu };