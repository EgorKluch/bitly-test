import {Dispatch, Store} from 'redux';
import {Action, AppState} from '../types/redux';

export function saveToLocalStorageMiddleware(store: Store<AppState>) {
    return (next: Dispatch) => (action: Action) => {
        next(action);

        const state = store.getState();
        localStorage.setItem('state', JSON.stringify(state));
    }
}
