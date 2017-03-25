import {
  UPLOAD_PICTURE,
  UPLOAD_PICTURE_SUCCESS,
  UPLOAD_PICTURE_FAILURE,
  REMOVE_PICTURE,
  REMOVE_PICTURE_SUCCESS,
  REMOVE_PICTURE_FAILURE,
} from '../constants/filestack';

function uploadPicture () {
    return {
        type: UPLOAD_PICTURE
    };
}

// It carries the picture url to be added to the state
function uploadPictureSuccess (url) {
    return {
        type: UPLOAD_PICTURE_SUCCESS,
        url
    };
}

// In case of failure
function uploadPictureFailure () {
    return {
        type: UPLOAD_PICTURE_FAILURE
    };
}

function removePicture (url) {
    return {
	    type: REMOVE_PICTURE,
	    url
    };
}

function removePictureSuccess () {
    return {
      type: REMOVE_PICTURE_SUCCESS
    };
}

function removePictureFailure () {
    return {
        type: REMOVE_PICTURE_FAILURE
    };
}

export {
  uploadPicture,
  uploadPictureSuccess,
  uploadPictureFailure,
  removePicture,
  removePictureSuccess,
  removePictureFailure,
};