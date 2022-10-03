// This is the index controller
// It defines an endpoint for the default route

// Import router package
const router = require('express').Router();

/*
/* Handle get requests for '/'
/* this is the default or 'index' route
/* req and res represent the incoming request and outgoing response
*/
router.get('/', (req, res) => {

    // set content type of response body in the headers
    // As this is defined globally in app.js it can be ommitted from here
    res.setHeader('Content-Type', 'application/json');

    // Send a  response - this app will be a web api so no need to send HTML
    res.json({message: 'Hello World!'});

});

// export the router function so that it can be imported elsewhere
module.exports = router;