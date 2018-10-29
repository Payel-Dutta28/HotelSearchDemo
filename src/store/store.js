import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history';

import { createLogger } from 'redux-logger';
import rootReducer from '../_reducer';
import { rootEpic } from '../_epics';

const loggerMiddleware = createLogger();
const epicMiddleware = createEpicMiddleware();

export const history = createBrowserHistory();

export const store = createStore(
    connectRouter(history)(rootReducer),
    applyMiddleware(
        routerMiddleware(history),
        epicMiddleware,
        loggerMiddleware
    )
);

epicMiddleware.run(rootEpic);