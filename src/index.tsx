import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore} from "redux";
import rootReducer from "./reducers/root-reducer";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootEpic} from "./middlewares/epics/epics-root";
import Router from "./Router";

const epicMiddleware = createEpicMiddleware()

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(epicMiddleware),
));

epicMiddleware.run(rootEpic)

ReactDOM.render(
    <React.StrictMode>
                <Provider store={store}>
                    <Router />
                </Provider>
            </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
