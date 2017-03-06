import React from 'react';
import App from './App';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = (props) => (
	<MuiThemeProvider>
		<App data={props}/>
	</MuiThemeProvider>
);

export default Main;