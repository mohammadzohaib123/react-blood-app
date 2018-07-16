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
import DatabaseReducers from "./Reducers/DatabaseReducers";
import {AuthEpic} from "./Epics/AuthEpic";
import {DatabaseEpic} from "./Epics/DatabaseEpic";
const loggerMiddleware = createLogger();

const rootReducer = combineReducers({
    AuthReducers,DatabaseReducers
});

const rootEpic = combineEpics(AuthEpic.signInUserOnFirebase,AuthEpic.signOutUserFromFirebase,AuthEpic.updateUserProfile,AuthEpic.authStateChanged,AuthEpic.createUserOnFirebase,DatabaseEpic.addDonorOnFirebase,DatabaseEpic.getDonorOnFirebase);

const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = applyMiddleware(epicMiddleware, loggerMiddleware);

export let store = createStore(rootReducer, createStoreWithMiddleware);