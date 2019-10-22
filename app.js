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


/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log('App is running at http://localhost:%d', app.get('port'));
    console.log('  Press CTRL-C to stop\n');
});
  
module.exports = app;