import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { UPLOAD_PICTURE, REMOVE_PICTURE } from '../constants/filestack';
import {
  uploadPictureSuccess,
  uploadPictureFailure,
  removePictureSuccess,
  removePictureFailure,
} from '../actions/filestack';

import filestack from 'filestack-js';

// const handle = 'A5I5qpNVRAusZb7gyxSiIz';
// const expire = Math.floor(new Date().getTime() / 1000 + 60*60);
// const policyObj = {
// 	handle,
// 	expire
// };

// const jsonPolicy = JSON.stringify(policyObj);

const client = filestack.init('A5I5qpNVRAusZb7gyxSiIz',
	// {
	// policy: window.btoa(jsonPolicy),
	// signature: '79e6859a77517802e5f9d77d6bde96313954cae461aaee54fcc702e95904eaea'
// }
);

const pick = () => {
   return client.pick({
        accept: ['image/*'],
        fromSources: ['local_file_system'],
	   hideWhenUploading: true,
	   uploadInBackground: true
    }).then(res => {
    	console.log(res.filesUploaded);
	   document.getElementById('picture').style.display = 'block';
       return res.filesUploaded[0].url;
   });
};

function* uploadPicture () {
    try {
        const url = yield call(pick);
        yield put(uploadPictureSuccess(url));
    } catch (err) {
        yield put(uploadPictureFailure());
    }
}

const remove = (url) => {
	return client.storeURL(url).then((result) => {
		let storedurl = result.url;
		console.log('removing file');
		let handle = storedurl.substr(storedurl.lastIndexOf("/") + 1);
		console.log(handle);
		client.remove(handle);
		console.log('file removed successfully: ' + storedurl);
	})
};

export function* removePicture (action) {
	const { url } = action;
  try {
  	yield call(remove, url);
    yield put(removePictureSuccess());
  } catch (err) {
  	yield put(removePictureFailure());
  }
}

export function* watchUploadPicture () {
    yield takeLatest(UPLOAD_PICTURE, uploadPicture);
}

export function* watchRemovePicture () {
	yield takeLatest(REMOVE_PICTURE, removePicture);
}