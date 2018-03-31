import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

// Start express
const app = express();

// Set up static assett path
app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    const store = createStore();

    // Some logic about
    // loading data into store

    res.send(renderer(req, store));
});

app.listen(app.get('port'), () => {
    console.log(`App is running at localhost:${app.get('port')}`);
});
