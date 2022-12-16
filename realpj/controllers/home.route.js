// controllers/hello.route.js
const express = require('express');
const router = express.Router();

// http://localhost:9000/hello
router.get('/', (req, res) => res.render('home_view'));

// http://localhost:9000/hello/world
router.get('/world', (req, res) => {
    //res.send('Hello WORLD, from controller...');
    res.render('hello_view', { favourites: [
        { category: 'cheese', thing: 'raclette' },
        { category: 'book', thing: 'Umberto Eco: Foucaults pendulum' },
        { category: 'drink', thing: 'cidre brut' },
        { category: 'color', thing: 'green (allez les Verts! ;) ' },
    ] });
});

module.exports = router;