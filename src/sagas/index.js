// Import the watcher we have just created
import { watchGetCategories, watchDeleteCategory } from './categories';
import { watchGetDishes } from './dishes';

export default function* rootSaga () {
// We start all the sagas in parallel
    yield [
        watchGetCategories(),
        watchDeleteCategory(),
        watchGetDishes(),
    ];
}