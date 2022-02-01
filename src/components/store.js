import { createStore, applyMiddleware } from "redux";
import rootreducer from "../reducer/rootreducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const persistConfig = {
    key: 'contact',
    storage: storage,
    whitelist: ['contact'] // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootreducer);

const middleware = applyMiddleware(thunk, logger);

const store = createStore(pReducer,middleware);

const persistor = persistStore(store);

export { persistor, store };


// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()


