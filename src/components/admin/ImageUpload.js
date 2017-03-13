import React from 'react';

import FlatButton from 'material-ui/FlatButton';

import './ImageUpload.css';

const styles = {
	uploadButton: {
		verticalAlign: 'middle',
		marginRight: 5,
	},
	uploadInput: {
		cursor: 'pointer',
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		width: '100%',
		opacity: 0,
	},
};

class ImageUpload extends React.Component {
	render() {
		const { handleImageChange, handleSubmit, data} = this.props;
		const { imagePreviewUrl } = data;
		let $imagePreview = null;
		if (imagePreviewUrl) {
			$imagePreview = (<img src={imagePreviewUrl} />);
		} else {
			$imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
		}
		return (
			<div className="previewComponent">
						<FlatButton
							label="Choose an Image"
							labelPosition="before"
							style={styles.uploadButton}
							containerElement="label"
						>
							<input
								type="file"
								style={styles.uploadInput}
								onChange={handleImageChange}/>
						</FlatButton>
						<FlatButton
									label="Upload Image"
									labelPosition="before"
									containerElement="label"
									style={styles.uploadButton}
									type="submit"
									onClick={handleSubmit}/>
				<div className="imgPreview">
					{$imagePreview}
				</div>
			</div>
		)
	}
}

export default ImageUpload;