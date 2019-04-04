import {LinksAction} from '../actions/links';
import {rootReducer} from '../reducers';

export type Action = LinksAction;

export type AppState = ReturnType<typeof rootReducer>;
