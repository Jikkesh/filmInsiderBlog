import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from "./reducer"

const store = configureStore({
    reducer: rootReducer, 
    middleware: [thunk], 
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
    <Provider store={store} >
    <App />
    </Provider>
);


