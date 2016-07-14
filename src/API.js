
import fs from 'fs';
import express from 'express';
import pug from 'pug';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './App';
import AppComponent from './components/App';

const server = express();

//server.use('/', express.static('public'));
//server.use('/components', express.static('bower_components'));

// react server-side rendering
server.use((req, res) => {

  const store = App.createStore();
  const initialState = store.getState();

  const html = pug.render(fs.readFileSync('index.pug'), {
    initialState: initialState,
    app: renderToString( <Provider store={store}><AppComponent /></Provider> )
  });

  res.end(html);
  
});

export default server;
