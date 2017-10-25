// server.js
// where your node app starts
var express = require('express'),
    app     = express(),
    server  = require('http').createServer(app);

// Everything in the front-end's public/ folder will be made available for download to the client
app.use( express.static( 'public' ) );

// Set homepage
app.get( "/", function ( request, response ) {
  response.redirect( '/intro.html' )
})

// listen for requests
server.listen( process.env.PORT ); 