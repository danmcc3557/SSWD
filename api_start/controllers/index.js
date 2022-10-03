const router = require('express').Router();

router.get('/', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.json({message: 'Hello World!'});
});

module.exports = router;