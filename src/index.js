import 'babel-polyfill';
import express from 'express';

import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// Start express
const app = express();

// Set up static assett path
app.use(express.static('public'));

app.get('*', (req, res) => {
    const store = createStore();

    // Some logic about
    // loading data into store

    res.send(renderer(req, store));
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});