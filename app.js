const express = require('express');
const morgan = require('morgan');
const url = require('url');

const app = express();
app.listen(3000);

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.get('/', (req, res) => {
    res.render('index', {
        title: 'søk'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    });
});

app.get('/beite', (req, res) => {
    res.render('beite', {
        title: 'beite'
    });
});

app.use((req, res) => {
    res.status(404).render('404', {
        title: '404'
    });
});