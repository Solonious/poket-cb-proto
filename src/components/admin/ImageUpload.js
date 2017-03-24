import React from 'react';
import Dropzone from 'react-dropzone';

import './ImageUpload.css';

class ImageUpload extends React.PureComponent {

	render() {
		console.log(this.props);
		const { onImageDrop, data } = this.props;
		return (
			<div>
				<div>
					<Dropzone className="container"
						onDrop={onImageDrop}
						multiple={false}
						accept="image/*">
						<div>Drop an image or click to select a file to upload.</div>
					</Dropzone>
				</div>
				<div>
					{data.uploadedFileCloudinaryUrl === '' ? null :
						<div className="image-prew">
							<img src={data.uploadedFileCloudinaryUrl} alt=""/>
						</div>}
				</div>
			</div>
		)
	}
}

export default ImageUpload;