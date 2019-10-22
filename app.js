/**
 * Module dependencies.
 */

 const express = require('express');
 const mongoose = require('mongoose');
 const path = require('path');
 const bodyParser = require('body-parser');


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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true )
mongoose.connect('mongodb://localhost:27017/training');
mongoose.connection.on('error', (err) => {
    console.error(err);
    console.log('MongoDB connection error. Please make sure MongoDB is running.');
    process.exit();
  });

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
const userController = require('./controllers/user');

/**
 * Primary app routes.
 */
app.get('/', homeController.index);
app.get('/signup', userController.showSignup);
app.post('/signup', userController.doSignup);

  
module.exports = app;