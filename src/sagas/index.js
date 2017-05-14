// Import the watcher we have just created
import { watchGetCategories, watchDeleteCategory, watchPostCategory } from './categories';
import { watchGetDishes, watchGetDish, watchDeleteDish, watchPostDish } from './dishes';
import { watchUploadPicture, watchRemovePicture } from './filestack';
import { watchGetComments, watchDeleteComment } from './comments';
import { watchLoginUser, watchSignupUser } from './auth';

export default function* rootSaga () {
// We start all the sagas in parallel
    yield [
      watchGetCategories(),
	    watchDeleteCategory(),
	    watchPostCategory(),
	    watchGetDishes(),
	    watchGetDish(),
	    watchDeleteDish(),
	    watchPostDish(),
	    watchUploadPicture(),
			watchRemovePicture(),
	    watchLoginUser(),
	    watchSignupUser(),
	    watchGetComments(),
	    watchDeleteComment(),
    ];
}