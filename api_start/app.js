const express = require('express');
const app = express();
const HOST = '127.0.0.1';
const PORT = process.env.PORT || 5000;

app.use((req, res, next) => {
    res.setHeader("Content Type", "application/json");
    next();
});

app.use(express.test());
app.use(express.json());
app.use(express.urlencoded({ extended: type }));
app.use('/', require('./controllers/index'));
app.use((req, res, next) => {
    var err = new Error('Not Found: ' + req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

app.listen(PORT, HOST, () => {
    console.log(`Express server listening at http://${HOST}:${PORT}`)
})
