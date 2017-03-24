import { takeLatest } from 'redux-saga/effects';
import { put, call } from 'redux-saga/effects';
import { UPLOAD_PICTURE } from '../constants/filestack';
import {
    uploadPictureSuccess,
    uploadPictureFailure
} from '../actions/filestack';

import filestack from 'filestack-js';

const apikey = 'A5I5qpNVRAusZb7gyxSiIz';
const client = filestack.init(apikey);

const pick = () => {
   return client.pick({
        accept: 'image/*',
        fromSources: ['local_file_system'],
    }).then(res => {
       return res.filesUploaded[0].url;
   });
};

function* uploadPicture () {
    try {
        const url = yield call(pick); // call the pick function
        yield put(uploadPictureSuccess(url));
    } catch (error) {
        yield put(uploadPictureFailure());
    }
}

export function* watchUploadPicture () {
    yield takeLatest(UPLOAD_PICTURE, uploadPicture);
}