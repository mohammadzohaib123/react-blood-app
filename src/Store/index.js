import {
    combineReducers,
    createStore,
    applyMiddleware
} from 'redux';
import {
    combineEpics,
    createEpicMiddleware
} from 'redux-observable';
import {createLogger} from 'redux-logger';
import AuthReducers from "./Reducers/AuthReducers";
import {AuthEpic} from "./Epics/AuthEpic";

const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    AuthReducers
});

const rootEpic = combineEpics(AuthEpic.signInUserOnFirebase,AuthEpic.signOutUserFromFirebase,AuthEpic.authStateChanged,AuthEpic.createUserOnFirebase);

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware, loggerMiddleware);

export let store = createStore(rootReducer, createStoreWithMiddleware);