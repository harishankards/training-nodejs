/**
 * Module dependencies.
 */

 const express = require('express');


/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');



/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d', app.get('port'));
    console.log('  Press CTRL-C to stop\n');
});


/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
  
module.exports = app;