var compression = require('compression')
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(compression())
const createPostRoutes = require('./routes/createRoutes');
const viewPostRoutes = require('./routes/viewRoutes');

app.set('port', (process.env.PORT || 3000));

// UI route
app.use('/', express.static(path.join(__dirname, 'public')));

//API routing
app.use('/create', createPostRoutes);
app.use('/view', viewPostRoutes);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    //console.log(req.url);
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



// Need to set the host domain as well instead of just port
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
