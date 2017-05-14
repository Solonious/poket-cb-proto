import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
	padding: 80
};

const CustomCircularProgress = () => (
	<div>
		<CircularProgress
			style={styles}
			size={180}
			thickness={20} />
	</div>
);

export default CustomCircularProgress;