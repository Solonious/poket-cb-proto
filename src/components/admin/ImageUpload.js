import React from 'react';
import Dropzone from 'react-dropzone';

import './ImageUpload.css';

const styles = {
	dropzone: {
		width: 'auto',
		height: 80,
		fontFamily: 'Glamour',
		fonSize: '0.1em'
	},
	image: {
		width: 'auto'
	}
};

class ImageUpload extends React.Component {

	render() {
		const { onImageDrop, data } = this.props;
		return (
			<div>
				<div className="FileUpload">
					<Dropzone
						onDrop={onImageDrop}
						multiple={false}
						accept="image/*">
						<div>Drop an image or click to select a file to upload.</div>
					</Dropzone>
				</div>

				<div>
					{data.uploadedFileCloudinaryUrl === '' ? null :
						<div>
							<img src={data.uploadedFileCloudinaryUrl} alt=""/>
						</div>}
				</div>
			</div>
		)
	}
}

export default ImageUpload;