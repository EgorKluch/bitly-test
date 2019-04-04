import {
    applyMiddleware,
    createStore
} from 'redux';
import {rootReducer} from '../../reducers';
import {saveToLocalStorageMiddleware} from '../../middlewares/saveToLocalStorageMiddleware';

export function configureStore() {
    return (initState = {}) => {
        return createStore(
            rootReducer,
            initState,
            applyMiddleware(saveToLocalStorageMiddleware)
        );
    };
}
